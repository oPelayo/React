import React from "react";
import { Link, NavLink } from "react-router-dom";


const ContenedorRouting = () => {
  return (
    <div>
      <nav>
        <h1>Mi sitio web</h1>
        <ul>
          <li>
            <NavLink end className={({isActive}) => isActive ? 'active-nueva' : null } to="/">Home</NavLink>
          </li>
          <li>
          <NavLink end className={({isActive}) => isActive ? 'active-nueva' : null } to="/about">About</NavLink>
          </li>
          <li>
          <NavLink end className={({isActive}) => isActive ? 'active-nueva' : null } to="/info">Info</NavLink>
          </li>
        </ul>
        <hr />
        <outlet />
      </nav>
    </div>
  );
}

export default ContenedorRouting;

