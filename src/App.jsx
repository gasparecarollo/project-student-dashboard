import React from "react";
import { useState } from "react";
import data from "./data/data.json"
import studentDetails, { GraduationStatus } from "./Components/studentDetails";
// import "App.css"


console.log("data[0] : ", data[0])

function App() {
  const [trackSelectedStudentByID, setTrackSelectedStudentByID] = useState(null);
  const [showCertifs, setShowCertifs] = useState(false);

  const studentsToRender = data.map(
    (eachStudentObj) => (

      <div className="card_container" key={eachStudentObj.id}>

        <img src={eachStudentObj.profilePhoto} alt={`Image of Student: ${eachStudentObj.names.preferredName}`} />

        <h4>
          <div className="studentName" id={eachStudentObj.id}>
            {`Student Name: ${eachStudentObj.names.preferredName}`}
          </div>
          <div className="email">
            {`Email: ${eachStudentObj.username}`}
          </div>
          <div>{`Birthday: ${eachStudentObj.dob}`}
            <div className="startDate">
              {`Date Started: ${eachStudentObj.cohort.cohortCode}`}
            </div>
            <div className="Show">
              <button
                type="submit"
                onClick={() =>
                  setTrackSelectedStudentByID(trackSelectedStudentByID === eachStudentObj.id ? null : eachStudentObj.id
                  )
                }
              >
                {trackSelectedStudentByID === eachStudentObj.id ? "Show Less" : "Show More"}
              </button>
              {trackSelectedStudentByID === eachStudentObj.id && (
                <studentDetails student={eachStudentObj} />

              )}

              {/* <button type="submit onClick={() => setShowCertifs(!showCertifs)}> 
                {showCertifs ? "Show Less" : "Show More"}
              </button>
              {showCertifs && studentDetails}
              {showCertifs && <studentDetails />} */}

            </div>

          </div>

        </h4 >

      </div >

    )
  )

  const cohortsToRender = data.map(
    (cohortsByYear) => {
      return (
        <div className="cohortByStartDate">
          <h3>{`${cohortsByYear.cohort.cohortCode}`}</h3>

        </div >


      )
    }
  )


  return (
    <div>
      <h1 className="header">Student Dashboard</h1>
      {studentsToRender}
      <h2>Choose A Class By Start Date</h2>
      {/* {cohortsToRender} */}

      <div className="studentDeets">
        <h2> Student Details</h2>
        {studentsToRender}
        {showCertifs && studentsToRender.map(eachStudentObj => (
          <studentDetails key={eachStudentObj.id} />



        ))}


      </div>
    </div>
  );

}




export default App;
