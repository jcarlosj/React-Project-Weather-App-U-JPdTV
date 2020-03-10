import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title }) => (     // Return Implicito & Destructuracion del Props
    <nav>
        <div className="nav-wrapper light-blue darken-2">
            <a href="#" className="brand-logo">{ title }</a>
        </div>
    </nav>
);

/** Verificación de Tipos */
Header .propTypes = {
    title: PropTypes .string .isRequired
}

export default Header;