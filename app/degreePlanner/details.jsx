'use client'

import { useEffect, useState } from "react";
import { Planner } from "./panner";

const env = process.env.NODE_ENV;
const baseURL = env === "development" ? "http://localhost:3000" : "http://www.unitrack.au";

export default function Details({degrees}) {
    const [shouldShowNextPage, setShouldShowNextPage] = useState(false);
    const [degreeIDSelected, setDegreeID] = useState("-1");
    const [majors, setMajorsForDegree] = useState([]);

    useEffect(() => {
        const getMajors = async () => {
            const resp = await fetch(`${baseURL}/api/getMajors?degreeID=${degreeIDSelected}`);

            if (resp.ok) {
                const majors = await resp.json();
                setMajorsForDegree(majors.data);
            }
        };

        getMajors();

    }, [degreeIDSelected]);

    return (
        <>
            {shouldShowNextPage ? <Planner /> :
            <form className="detailsContainer" id="detailsContainer" onSubmit={() => setShouldShowNextPage(true)}>
                <h2 className="pageHeader">Let&apos;s Get Started!</h2>
                <div className="detailsForm">
                    <div className="formElement">
                        <label className="degreeLabel" for="degree">Degree</label>
                        <select id="degree" className="degreeSelect" required value={degreeIDSelected} onChange={(e) => setDegreeID(e.target.value)}>
                            <option value="-1" disabled selected>Select degree</option>
                            {degrees.map((item, i) => <option key={item.degreeid} value={item.degreeid}> {item.degreename} </option>)}
                        </select>
                    </div>
                    <div className="formElement">
                        <label className="degreeLabel" for="firstMajor">Major</label>
                        <select id="firstMajor" className="degreeSelect" required>
                            <option value="" disabled selected>Select major</option>
                            {(degreeIDSelected === "-1") && <option disabled>Select Degree...</option>}
                            {(degreeIDSelected !== "-1") && majors && majors.map((item) => <option key={item.majorid} value={item.majorid}> {item.majorname} </option>)}
                        </select>
                    </div>
                    <div className="formElement">
                        <label className="degreeLabel" for="secondMajor">Second major (if applicable)</label>
                        <select id="secondMajor" className="degreeSelect" required>
                            <option value="" disabled selected>Select major</option>
                            {(degreeIDSelected === "-1") && <option disabled>Select Degree...</option>}
                            {(degreeIDSelected !== "-1") && majors && majors.map((item) => <option key={item.majorid} value={item.majorid}> {item.majorname} </option>)}
                        </select>
                    </div>
                    <div className="formElement">
                        <label className="degreeLabel" for="minor">Minor (if applicable)</label>
                        <select id="minor" className="degreeSelect" required>
                            <option value="" disabled selected>Select minor</option>
                            {(degreeIDSelected === "-1") && <option disabled>Select Degree...</option>}
                            {(degreeIDSelected !== "-1") && majors && majors.map((item) => <option key={item.majorid} value={item.majorid}> {item.majorname} </option>)}
                        </select>
                    </div>
                    <div className="formElement">
                        <button className="submitButton" type="submit">FINISH</button>
                    </div>
                </div>
            </form>
            }
        </>
    )
}
