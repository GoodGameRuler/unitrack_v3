import "./units.css";

function Units() {
    return (
        <div className="unitSearchPage">
            <h2 className="pageHeader"> Find a unit outline </h2>
            <p> Unit outlines help you plan your unit choices, organise your studies and assessments, and provide evidence of the topics you have studied. Unit outlines will be available 2 weeks before the first day of teaching. </p>

            <form action="" className="search_filter">
                <div className="unit_search">
                    <span className="material-icons icon"> search </span>
                    <label className="input_label"><p>Search Unit Code </p> <input className="unit_search_input" required type='text' placeholder="" name="search" id="unit_search" /></label>
                </div>
            </form>

            <div className="filterAccordian">
                <div className="filter">
                    <p className="filterHeader"> Level </p>

                    <fieldset className="row">
                        <div className="check">
                            <input type="checkbox" id="1000" />
                            <label for="1000">1000</label>
                        </div>

                        <div className="check">
                            <input type="checkbox" id="2000" />
                            <label for="2000">2000</label>
                        </div>

                        <div className="check">
                            <input type="checkbox" id="3000" />
                            <label for="3000">3000</label>
                        </div>

                        <div className="check">
                            <input type="checkbox" id="4000" />
                            <label for="4000">4000</label>
                        </div>

                        <div className="check">
                            <input type="checkbox" id="4000+"/ >
                            <label for="4000+">4000+</label>
                        </div>
                    </fieldset>

                </div>
                <div className="filter">
                    <p className="filterHeader"> Offered In </p>

                    <fieldset className="row">
                        <div className="check">
                            <input type="checkbox" id="sem1" />
                            <label for="sem1">Semester 1</label>
                        </div>

                        <div className="check">
                            <input type="checkbox" id="sem2" />
                            <label for="sem2">Semester 2</label>
                        </div>
                    </fieldset>

                </div>

                <div className="filter">
                    <p className="filterHeader"> Credit Points </p>

                    <fieldset className="row">
                        <div className="check">
                            <input type="checkbox" id="twoCP" />
                            <label for="twoCP">2 CP</label>
                        </div>

                        <div className="check">
                            <input type="checkbox" id="threeCP" />
                            <label for="threeCP">3 CP</label>
                        </div>

                        <div className="check">
                            <input type="checkbox" id="sixCP" />
                            <label for="sixCP">6 CP</label>
                        </div>

                        <div className="check">
                            <input type="checkbox" id="twelveCP" />
                            <label for="twelveCP">12 CP</label>
                        </div>
                    </fieldset>

                </div>

                <div className="filter">
                    <p className="filterHeader"> Exams </p>

                    <fieldset className="row">
                        <div className="check">
                            <input type="checkbox" id="noExams" />
                            <label for="noExams">No Exams</label>
                        </div>
                    </fieldset>

                </div>

            </div>
        </div>
    )
}

export default Units;
