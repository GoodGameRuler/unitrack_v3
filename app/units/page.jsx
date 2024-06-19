"use client";
import React, { useState } from 'react';

import "./units.css";
import UnitSelect from './select';

function Units() {
    const [isFilterVisible, setIsFilterVisible] = useState(false);

    const toggleFilter = () => {
        setIsFilterVisible(!isFilterVisible);
    };

    const handleInputChange = () => {
        setIsFilterVisible(false);
    };

    const clearForm = () => {
        document.querySelector(".searchFilter").reset();
    };

    return (
        <div className="unitSearchPage">
            <h2 className="pageHeader" id="unitPageHeader">Find a unit outline</h2>
            <p> Unit outlines help you plan your unit choices, organise your studies and assessments, and provide evidence of the topics you have studied. Unit outlines will be available 2 weeks before the first day of teaching. </p>

            <form action="" className="searchFilter">
                <div className="unitSearch">
                    <span className="material-icons icon" id="search"> search </span>
                    <label className="inputLabel">
                        <p>Search Unit Code </p>
                        <input className="unitSearchInput" type='text' placeholder="" name="search" id="unitSearch" onChange={handleInputChange} />
                    </label>
                    <span className="material-icons icon" id="filter" onClick={toggleFilter}> tune </span>
                </div>
            {isFilterVisible && (
                <div className="filterAccordian">
                    <div className="filtersContainer">
                        <div className="filter">
                            <p className="filterHeader"> Level </p>

                            <fieldset className="row">
                                <div className="check">
                                    <input type="checkbox" id="1000" />
                                    <label htmlFor="1000">1000</label>
                                </div>

                                <div className="check">
                                    <input type="checkbox" id="2000" />
                                    <label htmlFor="2000">2000</label>
                                </div>

                                <div className="check">
                                    <input type="checkbox" id="3000" />
                                    <label htmlFor="3000">3000</label>
                                </div>

                                <div className="check">
                                    <input type="checkbox" id="4000" />
                                    <label htmlFor="4000">4000</label>
                                </div>

                                <div className="check">
                                    <input type="checkbox" id="4000+"/ >
                                    <label htmlFor="4000+">4000+</label>
                                </div>
                            </fieldset>

                        </div>

                        <div className="filter">
                            <p className="filterHeader"> Offered In </p>

                            <fieldset className="row">
                                <div className="check">
                                    <input type="checkbox" id="sem1" />
                                    <label htmlFor="sem1">Semester 1</label>
                                </div>

                                <div className="check">
                                    <input type="checkbox" id="sem2" />
                                    <label htmlFor="sem2">Semester 2</label>
                                </div>
                            </fieldset>

                        </div>

                        <div className="filter">
                            <p className="filterHeader"> Credit Points </p>

                            <fieldset className="row">
                                <div className="check">
                                    <input type="checkbox" id="twoCP" />
                                    <label htmlFor="twoCP">2 CP</label>
                                </div>

                                <div className="check">
                                    <input type="checkbox" id="threeCP" />
                                    <label htmlFor="threeCP">3 CP</label>
                                </div>

                                <div className="check">
                                    <input type="checkbox" id="sixCP" />
                                    <label htmlFor="sixCP">6 CP</label>
                                </div>

                                <div className="check">
                                    <input type="checkbox" id="twelveCP" />
                                    <label htmlFor="twelveCP">12 CP</label>
                                </div>
                            </fieldset>

                        </div>

                        <div className="filter">
                            <p className="filterHeader"> Exams </p>

                            <fieldset className="row">
                                <div className="check">
                                    <input type="checkbox" id="noExams" />
                                    <label htmlFor="noExams">No Exams</label>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                    <button type="button" className="clearFilter" onClick={clearForm}>Clear all</button>
                </div>
            )}
            </form>

            <UnitSelect />

        </div>
    )
}

export default Units;
