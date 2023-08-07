import React from "react";
import Darkmode from "./Darkmode";

const ToggleChange = ({ toggle, handleToggleChange }) => {

    return <div className="toggle-container" onClick={handleToggleChange}>
        <div className={`toggle-btn ${!toggle ? "disable" : ""}`}> {toggle ? "Dark Mode: ON" : "Dark Mode: OFF"} </div>
    </div>


};

export default ToggleChange;