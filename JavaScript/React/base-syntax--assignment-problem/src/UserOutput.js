import React from "react";

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Hi {props.username}!</p>
            <p>Let's go slay a dragon!</p>
        </div>
        )
};

export default userOutput;