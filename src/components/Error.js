import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ msg }) => {    // Destructuring Props
    return (
        <p className="#f3e5f5 purple lighten-5 error">{ msg }</p>
    );
}

/** Verificación de Tipos */
Error .propTypes = {
    msg: PropTypes .string .isRequired
}

export default Error;