import React from "react";
import { useState } from "react";
import data from "./data/data.json"
import StudentDetails from "./Components/StudentDetails";
import StudentByCohort from "./Components/StudentByCohort";
import CommentsSection from "./Components/CommentsSection.jsx";
import Darkmode from "./Components/Darkmode";
import ToggleChange from "./Components/ToggleChange.jsx"
import "./Components/Toggle.css"
import "./App.css"


console.log("data[0] : ", data[0])



function App() {
  const [trackSelectedStudentByID, setTrackSelectedStudentByID] = useState(null);
  const [showCertifs, setShowCertifs] = useState(false);


  const studentTotal = data.length;
  console.log(studentTotal)

  const studentsToRender = data.map(
    (eachStudentObj) => (

      <div className="card_container" key={eachStudentObj.id}>

        <img src={eachStudentObj.profilePhoto} alt={`Image of Student: ${eachStudentObj.names.preferredName}`} />
        {/* 
        <p style="background-image: url('src/Assets/Pursuit.png')" className="background-image" alt="Background for each card"></p> */}

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
              {trackSelectedStudentByID === eachStudentObj.id ? <StudentDetails studentdeets={eachStudentObj} /> : <></>

              }

            </div>

          </div>

        </h4 >

      </div >

    )
  )




  return (
    <div>
      <h1 className="header">Student Dashboard</h1>
      <div className="studenttotal">
        <h3>{`Student Total: ${studentTotal}`}</h3>
      </div>
      <div><Darkmode /></div>

      {studentsToRender}
      <div className="studentbycohort">
        <StudentByCohort />
      </div>


      <div className="studentDeets">
        <h2> Student Details</h2>

        {/* {studentsToRender} */}
        {showCertifs && studentsToRender.map(eachStudentObj => (
          <StudentDetails key={eachStudentObj.id} />


        ))}

      </div>



      <div className="divSection" />
      <section>
        <h2> Student Comments Section</h2>
        <CommentsSection />
      </section>
    </div >
  );

}




export default App;
