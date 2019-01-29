import React from 'react';

const DisplayTime = ({displayTime}) => {
    const time = displayTime.toLocaleString();
    console.log(time);
    return (
        <div>
            <h3>{time}</h3>
        </div>
    );
}

export default DisplayTime;
