import React from 'react';

const Weather = ({ dataAPI }) => {      // Destructuring Props

    const { name, main } = dataAPI;     // Destructuring API data 

    /** Validate name */
    if( ! name ) return null;

    /** Convert Kelvin to Celsius */
    const convertToCelsius = ( kelvin ) => {
        if ( kelvin < 0 ) {
            return 0;
        }             
        
        return parseFloat( kelvin - 273.15, 10 ) .toFixed( 2 );
    }

    return (
        <div className="row">
            <div className="col s12">
                <div className="card-panel white">
                    <div className="black-text text-center">
                        <h2>{ name }</h2>
                        <p className="temp">
                            { convertToCelsius( main .temp ) } <span>&#x2103;</span>
                        </p>
                        <div className="row">
                            <div className="col s6">
                                <p className="sub-title">Mínima</p>
                                <p className="temp temp-min">{ convertToCelsius( main .temp_min ) } <span>&#x2103;</span></p>
                            </div>
                            <div className="col s6">
                                <p className="sub-title">Máxima</p>
                                <p className="temp temp-max">{ convertToCelsius( main .temp_max ) } <span>&#x2103;</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Weather;