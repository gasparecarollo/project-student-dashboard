import data from "../data/data.json"
import React, { useState } from "react";

function StudentByCohort() {
    const [selectedCohort, setSelectedCohort] = useState("");
    const [filteredStudents, setFilteredStudents] = useState([]);

    const handleCohortChange = (event) => {

        const selectedCohortCode = event.target.value;
        setSelectedCohort(selectedCohortCode);

        const studentsInCohort = data.filter(cohort => cohort.cohort.cohortCode === selectedCohortCode);
        setFilteredStudents(studentsInCohort);
    };

    const cohortsToRender = data.map(
        (cohortsByYear, index) => {

            return (
                <option key={index} value={cohortsByYear.cohort.cohortCode}> {`${cohortsByYear.cohort.season} ${cohortsByYear.cohort.cohortCode.year}: ${cohortsByYear.cohort.cohortCode}`} </option>

            );
        }
    );

    return (
        <div className="cohortByStartDateDropDown">
            <form>
                <label htmlFor="chooseCohort"> Select a Cohort </label>
                <select id="chooseCohort" name="cohorts" onChange={handleCohortChange} value={selectedCohort}>
                    <option value="">Select a Cohort </option>
                    {cohortsToRender}
                </select>
            </form>
            {selectedCohort && (
                <div>
                    Students in Selected Cohort
                    <ul>

                        {filteredStudents.map(student => (
                            <li key={student.id}> {student.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}


export default StudentByCohort;