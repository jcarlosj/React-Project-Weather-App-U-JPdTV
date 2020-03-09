import React from 'react';

const Weather = ({ dataAPI }) => {      // Destructuring Props

    console .log( 'Weather', dataAPI );

    return (
        <h2>Clima</h2>
    );
}

export default Weather;