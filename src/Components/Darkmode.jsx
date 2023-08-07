import { useState } from "react";
import ToggleChange from './ToggleChange'
import "../Components/Toggle.css"
import "../Components/Darkmode.css"

function Darkmode() {
    const [toggle, setToggle] = useState(false);
    const handleToggleChange = () => {
        setToggle(!toggle);

    }
    return (
        <div className="Darkmode-app">
            <div className="Darkmode-app-wrapper" style={toggle ? { backgroundColor: "#000" } : { backgroundColor: "#FFF" }}
            >
                <ToggleChange toggle={toggle} handleToggleChange={handleToggleChange} />
            </div>
        </div>
    );
}

export default Darkmode;