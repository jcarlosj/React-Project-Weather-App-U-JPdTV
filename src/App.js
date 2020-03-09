import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Weather from './components/Weather';

function App() {

  /** Define State */
  const 
    [ dataForm, setDataForm ] = useState({
      city: '',
      country: ''
    }),
    [ consumeAPI, setConsumeAPI ] = useState( false ),    // Para controlar cuando se consume el API
    [ dataAPI, setDataAPI ] = useState({});

  const { city, country } = dataForm;     // Destructuring State 'data'

  /** Hooks */
  useEffect( () => {
    const getDataApi = async () => {

      if( consumeAPI ) {

        const     /** API https://home.openweathermap.org/ */
          apiKey = '933d94cdb168e8ce1c25c7ef360a745a',
          url = `http://api.openweathermap.org/data/2.5/weather?q=${ city },${ country }&appid=${ apiKey }`,
          response = await fetch( url ),
          data = await response .json();

        //console .log( 'API Data', data );
        setDataAPI( data );           // Guarda datos del API en el State
        setConsumeAPI( false );       // Cambia State que controla cuando se consume el API
      }
      
    }
    getDataApi();

  }, [ consumeAPI ] );    // Hace Seguimiento a los cambios del State 'comsumeAPI'

  return (
    <Fragment>
      <Header 
        title="App Weather"
      />      
      <div className="form-container">
        <div className="container">
            <div className="row">
                <div className="col m6 s12">
                  <Form 
                    dataForm={ dataForm }
                    setDataForm={ setDataForm }
                    setConsumeAPI= { setConsumeAPI }
                  />
                </div>
                <div className="col m6 s12">
                  <Weather 
                    dataAPI={ dataAPI }
                  />
                </div>
            </div>
        </div>
    </div>
    </Fragment>
  );
}

export default App;
