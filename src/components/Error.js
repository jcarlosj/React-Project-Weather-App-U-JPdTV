import React from 'react';

const Error = ({ msg }) => {    // Destructuring Props
    return (
        <p className="#f3e5f5 purple lighten-5 error">{ msg }</p>
    );
}

export default Error;