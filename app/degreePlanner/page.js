"use client"
import "./degreePlanner.css";
import { useState } from "react";
import { Planner } from "./planner";

function DegreePlanner() {
    const [shouldShowNextPage, setShouldShowNextPage] = useState(false);

    return (
        <>
            {shouldShowNextPage ? <Planner /> :
            <form className="detailsContainer" id="detailsContainer" onSubmit={() => setShouldShowNextPage(true)}>
                <h2 className="pageHeader">Let&apos;s Get Started!</h2>
                <div className="detailsForm">
                    <div className="formElement">
                        <label className="degreeLabel" for="degree">Degree</label>
                        <select id="degree" className="degree_select" required>
                            <option value="" disabled selected>Select degree</option>
                            <option value="1">Bachelor of Science</option>
                            <option value="2">Bachelor of Advanced Computing</option>
                            <option value="3">Bachelor of Interaction Design/Bachelor of Advanced Studies</option>
                        </select>
                    </div>
                    <div className="formElement">
                        <label className="degreeLabel" for="firstMajor">Major</label>
                        <select id="firstMajor" className="degree_select" required>
                            <option value="" disabled selected>Select major</option>
                            <option value="1">Computer Science</option>
                            <option value="2">Data Science</option>
                            <option value="3">Development</option>
                        </select>
                    </div>
                    <div className="formElement">
                        <label className="degreeLabel" for="secondMajor">Second major (if applicable)</label>
                        <select id="secondMajor" className="degree_select" required>
                            <option value="" disabled selected>Select major</option>
                            <option value="1">Computer Science</option>
                            <option value="2">Data Science</option>
                            <option value="3">Software Development</option>
                            <option value="4">NA</option>
                        </select>
                    </div>
                    <div className="formElement">
                        <label className="degreeLabel" for="minor">Minor (if applicable)</label>
                        <select id="minor" className="degree_select" required>
                            <option value="" disabled selected>Select minor</option>
                            <option value="1">Mathematics</option>
                            <option value="2">Computer Science</option>
                            <option value="3">Design</option>
                            <option value="4">NA</option>
                        </select>
                    </div>
                    <div className="formElement">
                        <button className="submit_button" type="submit">FINISH</button>
                    </div>
                </div>
            </form>
            }
        </>
    )
}

export default DegreePlanner;
