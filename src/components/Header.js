import React from 'react';

const Header = ({ title }) => (     // Return Implicito & Destructuracion del Props
    <nav>
    <div className="nav-wrapper light-blue darken-2">
        <a href="#" className="brand-logo">{ title }</a>
    </div>
    <div className="form-container">
        <div className="container">
            <div className="row">
                <div className="col m6 s12">Formulario</div>
                <div className="col m6 s12">Datos del clima</div>
            </div>
        </div>
    </div>

  </nav>
);

export default Header;