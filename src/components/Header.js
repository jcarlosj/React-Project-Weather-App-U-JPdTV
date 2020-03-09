import React from 'react';

const Header = ({ title }) => (     // Return Implicito & Destructuracion del Props
    <nav>
        <div className="nav-wrapper light-blue darken-2">
            <a href="#" className="brand-logo">{ title }</a>
        </div>
    </nav>
);

export default Header;