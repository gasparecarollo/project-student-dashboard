import React from "react";
import { useState } from "react";
import data from "./data/data.json"
import studentDetails from "./Components/studentDetails";
import "./App.css"


console.log("data[0] : ", data[0])

function App() {
  const [showMore, setShowMore] = useState(false);


  const studentsToRender = data.map(
    (eachStudentObj) => {
      return (
        <>
          <div className="card_container">

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
                  <button type="submit" onClick={() => setShowMore(!showMore)}> ...show more</button>
                  {showMore && <studentDetails />}
                </div>
              </div>

            </h4>

            <div>

              <p>



              </p>

            </div>

          </div >
        </>
      )



    }
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
      <h3>Choose A Class By Start Date</h3>
      {cohortsToRender}

      <div>
        <h4> Student Details</h4>
        <button></button>

      </div>
    </div>
  );

}




export default App;
