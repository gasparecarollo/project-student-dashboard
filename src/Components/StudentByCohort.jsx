import React, { useState } from "react";
import data from "../data/data.json"
import StudentDetails from "./StudentDetails";
import StudentCard from "./studentCard";
import App from "../App";
// import "./App.css"


export default function StudentByCohort() {
    const [selectedCohort, setSelectedCohort] = useState("");
    const [filteredStudents, setFilteredStudents] = useState([]);

    const handleCohortChange = (event) => {
        const selectedCohortCode = event.target.value;
        setSelectedCohort(selectedCohortCode);

        let studentsInSelectedCohort = [];

        switch (selectedCohortCode) {
            case "All Students":
                studentsInSelectedCohort = data.flatMap(cohort => cohort.students);
                break;
            default:
                studentsInSelectedCohort = data
                    .find(cohort => cohort.cohort.cohortCode === selectedCohortCode)
                    ?.students || [];
                break;
        }
        setFilteredStudents(studentsInSelectedCohort);

    };
    const cohortOptions = [
        "All Students", "Spring 2025", "Summer 2025", "Fall 2025", "Winter 2025", "Spring 2026", "Summer 2026", "Fall 2026", "Winter 2026"
    ];

    const cohortsToRender = cohortOptions.map(
        (cohortChoice, index) => (
            <option key={index} value={cohortChoice}> {cohortChoice} </option>
        )
    );

    return (
        <div className="cohortByStartDateDropDown">
            <h2 className="h2-studentbycohort"> Choose a Student By Cohort</h2>
            <form className="cohortForm">
                <label htmlFor="chooseCohort"> Select a Cohort </label>
                <select id="chooseCohort" name="cohorts" onChange={handleCohortChange} value={selectedCohort}>
                    <option value="">Select a Cohort </option>
                    {cohortsToRender}
                </select>
            </form>
            {
                selectedCohort && (
                    <div>
                        Students in {selectedCohort} Cohort
                        <ul>

                            {filteredStudents.map(student => (
                                <li key={`{student.id}-{selectedCohort}`}>
                                    <StudentCard studentdeets={student} />
                                    <p> </p>

                                </li>
                            ))}
                        </ul>
                    </div>
                )

            }
        </div>
    );
};




