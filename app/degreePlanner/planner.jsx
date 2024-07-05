import React, { useState } from 'react';
import Link from "next/link";
import "./detailPlanner.css"

export function Planner() {

    return (
        <div className="degreePlanContainer">
            <div className="degreePlan">
                <div className="heading">
                    <p>Bachelor of Advanced Computing</p>
                    <Link href="#">
                        <i className="material-icons">edit</i>
                    </Link>
                </div>
                <SemesterPlan />
                <SemesterPlan />
                <SemesterPlan />
                <SemesterPlan />
            </div>
            <DegreeRequirements />
        </div>
    )
}

function DegreeRequirements() {
    var credits = credits;
    var totalCredits = totalCredits;
    // document.getElementsByTagName("PROGRESS")[0].setAttribute("value", credits / totalCredits * 100);
    // document.getElementById("degreePercentage").innerHTML = credits / totalCredits * 100 + "% planned";
    // document.getElementById("completedCredits").innerHTML = credits + "/" + totalCredits + "cp";

    return (
        <div className="degreeRequirements">
            <div className="degreeProgress">
                <p id="degreePercentage" onClick="updateProgressBar(12, 100)">0% planned</p>
                <p id="completedCredits">0/0cp</p>
                <br/>
            </div>
            <progress value="0" max="100"></progress>

            <div className="creditRequirements">
                <div className="degreeRequirement">
                    <p>Degree core</p>
                    <p>0/96</p>
                </div>
                <div className="degreeRequirement">
                    <p>Major 1</p>
                    <p>0/48</p>
                </div>
                <div className="degreeRequirement">
                    <p>Major 2</p>
                    <p>0/48</p>
                </div>
                <div className="degreeRequirement">
                    <p>Degree requirement</p>
                    <p>0/0</p>
                </div>
            </div>
        </div>

    )
}

function updateProgressBar(credits, totalCredits) {
}

export function SemesterPlan() {
    const [unit, setUnit] = useState(null);

    const addSelectedUnit = (unitCode) => {
        // TODO: Change to add actual unit name and credit points
        setUnit({
            code: unitCode,
            name: "Introduction to Programming",
            creditPoints: "6 credit points"
        });
    };

    const removeSelectedUnit = () => {
        setUnit(null);
    };

    return (
        <div className="semesterPlan">
            <p id="year">2021</p>

            <div className="semesterRow">
                <p id="semester">Semester 2</p>
                <Link href="#">
                    <i className="material-icons">add_box</i>
                </Link>
            </div>

            {unit ?
                <Unit unit={unit} onRemove={removeSelectedUnit}/> :
                <EmptyUnit onAdd={() => addSelectedUnit('INFO1110')} />
            }
        </div>
    )
}

export function EmptyUnit({ onAdd }) {
    return (
        <div className="degreeUnit">
            <Link href="#" onClick={onAdd}>
                <i className="material-icons searchIcon">search</i>
            </Link>
        </div>
    )
}

export function Unit({ unit, onRemove }) {
    return (
        <a href="#" className="degreeUnit">
            <i className="material-icons removeIcon" onClick={onRemove}>remove</i>
            <div className="unitDetails">
                <div className="unitCode">
                    <p>{unit?.code}</p>
                </div>
                <div className="unitName">
                    <p>{unit?.name}</p>
                </div>
                <div className="creditPoints">
                    <p>{unit?.creditPoints}</p>
                </div>
            </div>
        </a>
    )
}