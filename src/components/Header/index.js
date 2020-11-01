import React from "react";
// import "./header.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header>
      <div className="logo">
        <NavLink className="nav-item" to="/item">
          eCommerce Site
        </NavLink>
      </div>

      <div className="nav">
        <ul className="menu-ul">
          <li>
            <NavLink className="nav-item" to="/item">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-item" to="/cart">
              Cart {props.cartLength ? "(" + props.cartLength + ")" : ''}
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
