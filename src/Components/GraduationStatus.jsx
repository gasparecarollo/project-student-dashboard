import data from "../data/data.json"
import React, { useState } from 'react';

function GraduationStatus(props) {
    const [isOnTrack, setIsOnTrack] = useState(false);

    // Assuming props.certifications is an object containing certification statuses
    const { resume, linkedin, github, mockInterview, codeWarsScore } = props.certifications;

    // Check the conditions for being on track
    if (codeWarsScore > 600 && resume && linkedin && github && mockInterview === true) {
        setIsOnTrack(true);
    } else {
        setIsOnTrack(false);
    }

    return (
        <div>
            <p>Student is {isOnTrack ? 'on track' : 'off track'} to graduate.</p>
        </div>
    );
}

export default GraduationStatus;