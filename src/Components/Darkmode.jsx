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
        <div
            className="app" style={toggle ? { backgroundColor: "#000" } : { backgroundColor: "#fff" }}
        >
            <Toggle toggle={toggle} handleToggleChange={handleToggleChange} />
        </div>
    );
}

export default Darkmode;