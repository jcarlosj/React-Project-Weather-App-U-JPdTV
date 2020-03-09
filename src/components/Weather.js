import React from 'react';

const Weather = ({ dataAPI }) => {      // Destructuring Props

    const { name, main } = dataAPI;     // Destructuring API data 

    /** Validate name */
    if( ! name ) return null;

    return (
        <div className="row">
            <div className="col s12">
                <div className="card-panel white">
                    <div className="black-text text-center">
                        <h2>{ name }</h2>
                        <p className="temp">
                            { main .temp } grados Kelvin
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Weather;