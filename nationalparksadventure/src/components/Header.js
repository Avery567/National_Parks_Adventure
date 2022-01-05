
import {Link} from "react-router-dom";
import LogIn from './LogIn';
import SignUp from './SignUp';
import Search from './Search';
import "../App.css";
import { FiMenu, FiX } from "react-icons/fi";
import React, { useState } from "react";

function Header ({ onLogin, search, handleSearch, navbarLinks }) {

    const [menuClicked, setMenuClicked] = useState(false);

    const toggleMenuClick = () => {
      setMenuClicked(!menuClicked);
    };

    return (
        <nav className="navbar">
        <span className="navbar__logo" ><Link to="/" style={{textDecoration:"none", color: "white"}}>National Parks Adventure</Link></span>
        {menuClicked ? (
          <FiX size={25} className={"navbar__menu"} onClick={toggleMenuClick} />
        ) : (
          <FiMenu
            size={25}
            className={"navbar__menu"}
            onClick={toggleMenuClick}
          />
        )}
        <ul
          className={
            menuClicked ? "navbar__list navbar__list--active" : "navbar__list"
          }
        >
          {/* <a className="navbar__link"><Search search={search} handleSearch={handleSearch}/></a> */}
          {navbarLinks.map((item, index) => {
            return (
              <li className="navbar__item" key={index}>
                <a className="navbar__link" href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
            {/* <a ><Link to="/dashboard">My Dashboard</Link></a> */}

            <a className="navbar__link"><LogIn onLogin={onLogin} /></a>
            <a className="navbar__link"><SignUp onLogin={onLogin} /></a>
        </ul>
      </nav>



    )}

export default Header;
