import data from "../data/data.json"

const studentDetails = ({ studentdeets }) => {

    return (

        <div className="details">
            <p>{`Resume Certification Status: ${studentdeets.certifications.resume ? "👍🏻" : "👎🏻"}`} </p>
            <p>{`LinkedIn Profile Status: ${studentdeets.linkedin ? "👍🏻" : "👎🏻"}`} </p>
            <p>{`GitHub Profile Status: ${studentdeets.github ? "👍🏻" : "👎🏻"}`} </p>
            <p>{`Mock Interview Status: ${studentdeets.mockInterview ? "👍🏻" : "👎🏻"}`} </p>
            <p>{`CodeWars Score Percentage: ${studentdeets.codewars && (parseInt(studentdeets.codewars.current.total) / parseInt(studentdeets.codewars.goal.total) * 100).toFixed(2)} %`}</p>
            <p>{`CodeWars Score above 600: ${studentdeets.codewars && parseInt(studentdeets.codewars.current.total) <= 600 ? "👍🏻" : "👎🏻"}`}</p>
        </div>


    );

};


export default studentDetails;