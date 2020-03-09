import React from 'react';

const Header = ({ title }) => (     // Return Implicito & Destructuracion del Props
    <nav>
    <div className="nav-wrapper">
        <a href="#" className="brand-logo">{ title }</a>
    </div>
  </nav>
);

export default Header;