import data from "../data/data.json";
import React, { useState } from "react";


export function GraduationStatus(props) {
    const [isOnTrack, setIsOnTrack] = useState(false);

    const { resume, linkedin, github, mockInterview, codeWarsScore } = props.certifications;
    setIsOnTrack(codeWarsScore <= 600 && resume && linkedin && github && mockInterview === true ? true : false)

    return (

        <div>
            <p>Student is {isOnTrack ? "on track" : "off track"} to graduate Pursuit.</p>

        </div>
    )
}
export default function studentDetails({ studentdeets }) {
    return (

        <div className="details">
            <p>{`Resume Certification Status: ${studentdeets.certifications.resume ? "👍🏻" : "👎🏻"}`} </p>
            <p>{`LinkedIn Profile Status: ${studentdeets.linkedin ? "👍🏻" : "👎🏻"}`} </p>
            <p>{`GitHub Profile Status: ${studentdeets.github ? "👍🏻" : "👎🏻"}`} </p>
            <p>{`Mock Interview Status: ${studentdeets.mockInterview ? "👍🏻" : "👎🏻"}`} </p>
            <p>{`CodeWars Score Percentage: ${studentdeets.codewars && (parseInt(studentdeets.codewars.current.total) / parseInt(studentdeets.codewars.goal.total) * 100).toFixed(2)} %`}</p>
            <p>{`CodeWars Score above 600: ${studentdeets.codewars && parseInt(studentdeets.codewars.current.total) <= 600 ? "👍🏻" : "👎🏻"}`}</p>
            <GraduationStatus certifications={studentdeets.certifications} />
        </div>


    );

};
