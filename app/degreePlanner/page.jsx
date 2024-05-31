"use client";
import "./degreePlanner.css";
import { useState } from "react";
import { Planner } from "./planner";
import { TextField, Button, Box } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

function DegreePlanner() {
  const [shouldShowNextPage, setShouldShowNextPage] = useState(false);
  const [startYear, setStartYear] = useState(null);
  const [endYear, setEndYear] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShouldShowNextPage(true);
  };

  return (
    <>
      {shouldShowNextPage ? (
        <Planner />
      ) : (
        <form
          className="detailsContainer"
          id="detailsContainer"
          onSubmit={handleSubmit}
        >
          <h2 className="pageHeader">Let&apos;s get started!</h2>
          <div className="detailsForm">
            <div className="formElement">
              <label className="degreeLabel" htmlFor="degree">
                Degree
              </label>
              <select id="degree" className="degreeSelect" required>
                <option value="" disabled selected>
                  Select degree
                </option>
                <option value="1">Bachelor of Science</option>
                <option value="2">Bachelor of Advanced Computing</option>
                <option value="3">
                  Bachelor of Interaction Design/Bachelor of Advanced Studies
                </option>
              </select>
            </div>
            <div className="formElement">
              <Box display="flex" flexDirection="column" gap={2}>
                <label className="degreeLabel">Degree year</label>
                <Box display="flex" gap={2}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      views={["year"]}
                      label="Start year"
                      value={startYear}
                      onChange={(newValue) => setStartYear(newValue)}
                      renderInput={(params) => (
                        <TextField {...params} required />
                      )}
                    />
                    <DatePicker
                      views={["year"]}
                      label="End year"
                      value={endYear}
                      onChange={(newValue) => setEndYear(newValue)}
                      renderInput={(params) => (
                        <TextField {...params} required />
                      )}
                    />
                  </LocalizationProvider>
                </Box>
              </Box>
            </div>
            <div className="formElement">
              <label className="degreeLabel" htmlFor="firstMajor">
                Major
              </label>
              <select id="firstMajor" className="degreeSelect" required>
                <option value="" disabled selected>
                  Select major
                </option>
                <option value="1">Computer Science</option>
                <option value="2">Data Science</option>
                <option value="3">Development</option>
              </select>
            </div>
            <div className="formElement">
              <label className="degreeLabel" htmlFor="secondMajor">
                Second major (if applicable)
              </label>
              <select id="secondMajor" className="degreeSelect" required>
                <option value="" disabled selected>
                  Select major
                </option>
                <option value="1">Computer Science</option>
                <option value="2">Data Science</option>
                <option value="3">Software Development</option>
                <option value="4">NA</option>
              </select>
            </div>
            <div className="formElement">
              <label className="degreeLabel" htmlFor="minor">
                Minor (if applicable)
              </label>
              <select id="minor" className="degreeSelect" required>
                <option value="" disabled selected>
                  Select minor
                </option>
                <option value="1">Mathematics</option>
                <option value="2">Computer Science</option>
                <option value="3">Design</option>
                <option value="4">NA</option>
              </select>
            </div>
            <div className="formElement">
            <button className="submitButton" type="submit">
                START PLANNING
            </button>
            </div>
          </div>
        </form>
      )}
    </>
  );
}

export default DegreePlanner;
