import React, { useState } from "react";
import data from "../data/data.json"
import StudentDetails from "./StudentDetails";
import StudentCard from "./studentCard";
// import "./App.css"


export default function StudentByCohort() {
    const [selectedCohort, setSelectedCohort] = useState("");
    const [filteredStudents, setFilteredStudents] = useState([]);

    const handleCohortChange = (event) => {
        const selectedCohortCode = event.target.value;
        setSelectedCohort(selectedCohortCode);

        const studentsInSelectedCohort = selectedCohortCode === "All Students"
            ? data
            : selectedCohortCode === "Spring2025"
                ? (data.find(cohort => cohort.cohort.cohortCode === "Spring2025")?.students || [])
                : (data.find(cohort => cohort.cohort.cohortCode === selectedCohortCode)?.students || [])
        //         : selectedCohortCode === "Summer2025"
        // ? (data.find(cohort => cohort.cohort.cohortCode === "Summer2025")?.students || [])
        // : (data.find(cohort => cohort.cohort.cohortCode === selectedCohortCode)?.students || [])
        //         : selectedCohortCode === "Fall2025"
        // ? (data.find(cohort => cohort.cohort.cohortCode === "Fall2025")?.students || [])
        // : (data.find(cohort => cohort.cohort.cohortCode === selectedCohortCode)?.students || [])
        //         : selectedCohortCode === "Winter2025"
        // ? (data.find(cohort => cohort.cohort.cohortCode === "Winter2025")?.students || [])
        // : (data.find(cohort => cohort.cohort.cohortCode === selectedCohortCode)?.students || [])
        //         : selectedCohortCode === "Spring2026"
        // ? (data.find(cohort => cohort.cohort.cohortCode === "Spring2026")?.students || [])
        // : (data.find(cohort => cohort.cohort.cohortCode === selectedCohortCode)?.students || [])
        //         : selectedCohortCode === "Summer2026"
        // ? (data.find(cohort => cohort.cohort.cohortCode === "Summer2026")?.students || [])
        // : (data.find(cohort => cohort.cohort.cohortCode === selectedCohortCode)?.students || [])
        // : selectedCohortCode === "Fall2026"
        // ? (data.find(cohort => cohort.cohort.cohortCode === "Fall2026")?.students || [])
        // : (data.find(cohort => cohort.cohort.cohortCode === selectedCohortCode)?.students || [])
        //         : selectedCohortCode === "Winter2026"
        // ? (data.find(cohort => cohort.cohort.cohortCode === "Winter2026")?.students || [])
        // : [];

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
                                </li>
                            ))}
                        </ul>
                    </div>
                )

            }
        </div>
    );
};




