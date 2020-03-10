import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Weather from './components/Weather';
import Error from './components/Error';

function App() {

  /** Define State */
  const 
    [ dataForm, setDataForm ] = useState({
      city: '',
      country: ''
    }),
    [ consumeAPI, setConsumeAPI ] = useState( false ),    // Para controlar cuando se consume el API
    [ dataAPI, setDataAPI ] = useState({}),
    [ error, setError ] = useState( false );

  const { city, country } = dataForm;     // Destructuring State 'data'

  let component;

  /** Hooks */
  useEffect( () => {
    const getDataApi = async () => {

      if( consumeAPI ) {

        const     /** API https://home.openweathermap.org/ */
          apiKey = '933d94cdb168e8ce1c25c7ef360a745a',
          url = `https://api.openweathermap.org/data/2.5/weather?q=${ city },${ country }&appid=${ apiKey }`,
          response = await fetch( url ),
          data = await response .json();

        console .log( 'API Response', response );
        setDataAPI( data );           // Guarda datos del API en el State
        setConsumeAPI( false );       // Cambia State que controla cuando se consume el API

        /** Controla Códigos de Error del API */
        console .log( 'Cod', data .cod );
        if( data .cod == "404" ) {
          setError( true );
        } else {
          setError( false );
        }
        
      }
      
    }
    getDataApi();

  }, [ consumeAPI ] );    // Hace Seguimiento a los cambios del State 'comsumeAPI'

  /** Carga Condicional de Componentes */
  if( error ) {
    component = <Error msg="No hay resultados" />;
  } else {
    component = <Weather dataAPI={ dataAPI } />;
  }

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
                  { component }
                </div>
            </div>
        </div>
    </div>
    </Fragment>
  );
}

export default App;
