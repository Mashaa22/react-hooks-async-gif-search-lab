import React from "react";

function NavBar({ color, name }) {

  return (
    <nav className={color}>
      <div className="container-fluid">
        <div className="navbar-header">
          <span className="navbar-brand">{name}</span>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
