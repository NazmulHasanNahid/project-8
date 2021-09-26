import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <div>
      <header className="header">
        <h2>Make an Dramatical Web Series</h2>
        <p>The web series name is <span className="custom-color">MORICHIKA</span> </p>
        <h3>Total Budget : <span className="custom-color">10000$</span> </h3>
      </header>
    </div>
  );
};

export default Header;