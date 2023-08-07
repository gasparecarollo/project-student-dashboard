import data from "../data/data.json";
import React, { useEffect, useState } from "react";
import CommentsSection from "./CommentsSection";


function GraduationStatus(props) {
    const [isOnTrack, setIsOnTrack] = useState(false);

    const { resume, linkedin, github, mockInterview, codeWarsScore } = props.certifications;
    setIsOnTrack(codeWarsScore <= 600 && resume && linkedin && github && mockInterview === true ? true : false)

    return (

        <div>
            <p>Student is {isOnTrack ? "on track" : "off track"} </p>

        </div>
    )
}
const StudentDetails = ({ studentdeets }) => {

    const [isOnTrack, setIsOnTrack] = useState(false);

    // const { resume, linkedin, github, mockInterview, codeWarsScore } = studentdeets.certifications;
    useEffect(() => {
        setIsOnTrack(studentdeets.codewars.current.total <= 600 && resume && linkedin && github && mockInterview === true ? true : false)
    }
    );

    return (

        <div className="details"> <h1> 😆</h1>
            <div>
                <p>Student is {isOnTrack ? "on track" : "off track"} </p>
            </div>
            <h1> Graduation Requirements:</h1>
            <p>{`Resume Certification Status: ${studentdeets.certifications.resume ? "👍🏻" : "👎🏻"}`} </p>
            <p>{`LinkedIn Profile Status: ${studentdeets.linkedin ? "👍🏻" : "👎🏻"}`} </p>
            <p>{`GitHub Profile Status: ${studentdeets.github ? "👍🏻" : "👎🏻"}`} </p>
            <p>{`Mock Interview Status: ${studentdeets.mockInterview ? "👍🏻" : "👎🏻"}`} </p>
            <p>{`CodeWars Score Percentage: ${studentdeets.codewars && (parseInt(studentdeets.codewars.current.total) / parseInt(studentdeets.codewars.goal.total) * 100).toFixed(2)} %`}</p>
            <p>{`CodeWars Score above 600: ${studentdeets.codewars && parseInt(studentdeets.codewars.current.total) <= 600 ? "👍🏻" : "👎🏻"}`}</p>
            <div>
                <h1>Scores:</h1>
                <p>{`Assignments:${studentdeets.cohort.scores.assignments}`}</p>
                <p>{`Projects:${studentdeets.cohort.scores.projects}`}</p>
                <p> {`Assessments:${studentdeets.cohort.scores.assessments}`} </p>

            </div>
            <div className="comment-section">
                <h1> Comment Section</h1>
                <CommentsSection />
            </div>
        </div>


    );

};

export default StudentDetails;