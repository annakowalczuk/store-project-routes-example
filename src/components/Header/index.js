import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css"; 

export const Header = props => {
  return (
    <div>
      <nav>
        <div>Navbar</div>
        <NavLink exact to="/" activeClassName="active">Root</NavLink>
        <NavLink exact to="/home" activeClassName="active">Home</NavLink>
        <NavLink exact to="/user" activeClassName="active">User</NavLink>
        <NavLink exact to="/faq" activeClassName="active">FAQ</NavLink>
        <NavLink exact to="/terms" activeClassName="active">Regulamin</NavLink>
        <NavLink exact to="/contact" activeClassName="active">Kontakt</NavLink>
      </nav>
    </div>
  );
};
