import React, { useState } from "react";
import data from "../data/data.json"
// import "./App.css"


export default function StudentByCohort() {
    const [selectedCohort, setSelectedCohort] = useState("");
    const [filteredStudents, setFilteredStudents] = useState([]);

    const handleCohortChange = (event) => {

        const selectedCohortCode = event.target.value;
        setSelectedCohort(selectedCohortCode);

        const studentsInCohort = data.filter(cohort => cohort.cohort.cohortCode === selectedCohortCode);
        setFilteredStudents(studentsInCohort[0]?.students || []);
    };

    const cohortsToRender = data.map(
        (cohortsByYear, index) => {
            const cohort = cohortsByYear.cohort;
            const cohortChoices = `${cohort.season} ${cohort.year} ${cohort.cohortCode}`;

            return (
                <option key={index} value={cohort.cohortCode}> {cohortChoices}</option>

            );
        }
    );

    return (
        <div className="cohortByStartDateDropDown">
            <h2 className="h2-studentbycohort"> Choose a Student By Cohort</h2>
            <form>
                <label htmlFor="chooseCohort"> Select a Cohort </label>
                <select id="chooseCohort" name="cohorts" onChange={handleCohortChange} value={selectedCohort}>
                    <option value="">Select a Cohort </option>
                    {cohortsToRender}
                </select>
            </form>
            {
                selectedCohort && (
                    <div>
                        Students in Selected Cohort
                        <ul>

                            {filteredStudents.map(student => (
                                <li key={student.id}> {student.name}</li>
                            ))}
                        </ul>
                    </div>
                )
            }
        </div >
    );
}
