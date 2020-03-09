import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Weather from './components/Weather';

function App() {

  /** Define State */
  const [ dataForm, setDataForm ] = useState({
    city: '',
    country: ''
  });

  const { city, country } = dataForm;     // Destructuring State 'data'

  /** Hooks */
  useEffect( () => {
    console .clear();
    console .log( 'City', city );
    console .log( 'Country', country );
  }, [ city, country ] );

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
                  />
                </div>
                <div className="col m6 s12">
                  <Weather />
                </div>
            </div>
        </div>
    </div>
    </Fragment>
  );
}

export default App;
