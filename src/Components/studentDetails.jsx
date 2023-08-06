import data from "../data/data.json"

const studentDetails = data.map(
    (studentDetails) => {
        return (

            <div className="details">
                <p>{`Resume Certification Status: ${studentDetails.certifications.resume ? "👍🏻" : "👎🏻"}`} </p>
                <p>{`LinkedIn Profile Status: ${studentDetails.linkedin ? "👍🏻" : "👎🏻"}`} </p>
                <p>{`GitHub Profile Status: ${studentDetails.github ? "👍🏻" : "👎🏻"}`} </p>
                <p>{`Mock Interview Status: ${studentDetails.mockInterview ? "👍🏻" : "👎🏻"}`} </p>
                <p>{`CodeWars Score Percentage: ${(parseInt(studentDetails.codewars.current.total) / parseInt(studentDetails.codewars.goal.total) * 100).toFixed(2)} %`}</p>
                <p>{`CodeWars Score above 600: ${parseInt(studentDetails.codewars.current.total) <= 600 ? "👍🏻" : "👎🏻"}`}</p>
            </div>


        )
    }
)


export default studentDetails;