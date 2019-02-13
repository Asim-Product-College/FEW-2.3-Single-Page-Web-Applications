import React from 'React';


const Atmosphere = ({ pressure, humidity }) => (
    <div class="astmosphere">
        <h3>{pressure}</h3>
        <p>{humidity}</p>
    </div>
);

export default Atmosphere;