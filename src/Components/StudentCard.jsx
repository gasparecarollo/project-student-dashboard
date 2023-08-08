import React from "react";
import { useState } from "react";
import data from "../data/data.json";
import StudentDetails from "./StudentDetails";





function StudentCard({ studentdeets }) {
    const [trackSelectedStudentByID, setTrackSelectedStudentByID] = useState(null)
    const students = data.map((eachStudentObj) => (

        <div className="card_container" key={studentdeets.id}>

            <img src={eachStudentObj.profilePhoto} alt={`Image of Student: ${studentdeets.names.preferredName}`} />
            {/* 
        <p style="background-image: url('src/Assets/Pursuit.png')" className="background-image" alt="Background for each card"></p> */}

            <h4>
                <div className="studentName" id={studentdeets.id}>
                    {`Student Name: ${studentdeets.names.preferredName}`}
                </div>
                <div className="email">
                    {`Email: ${studentdeets.username}`}
                </div>
                <div>{`Birthday: ${studentdeets.dob}`}
                    <div className="startDate">
                        {`Date Started: ${studentdeets.cohort.cohortCode}`}
                    </div>
                    <div className="Show">
                        <button
                            type="button"
                            onClick={() =>
                                setTrackSelectedStudentByID(trackSelectedStudentByID === studentdeets.id ? null : studentdeets.id
                                )
                            }
                        >
                            {trackSelectedStudentByID === studentdeets.id ? "Show Less" : "Show More"}
                        </button>
                        {trackSelectedStudentByID === studentdeets.id ? <StudentDetails studentdeets={studentdeets} /> : <></>

                        }

                    </div>

                </div>

            </h4 >

        </div >
    ))
    return (
        <div>

            {students}
        </div>

    )

};

export default StudentCard;