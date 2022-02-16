import React, { useContext, useRef, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ShowContext } from "../../hooks/ShowContext";
import "./NavBar.css";
import { gsap } from "gsap";

const NavBar = () => {
  const el = useRef();
  const tl = useRef(null);

  const location = useLocation();

  const handleShow = () => {
    tl.current = gsap
      .timeline({ defaults: { duration: .5, ease: "power2.out" } })
      .to(el.current, {
        opacity: 1,
        zIndex: 99,
      })
      .to("ul li", {
        opacity: 1,
        stagger: 0.3,
      });
  };

  const handleClose = () => {
    tl.current.reversed(true);
  };

  return (
    <>
      <nav className="navbarShow">
        <div className="navigation">
          <h2 className="title-Nav">MOOVER</h2>
          <div className="box"></div>
          <button className={location.pathname !== '/' ? 'color-orangeMenu' : `menuShow`} onClick={handleShow}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
      <ul ref={el} className={"navbar"}>
        <button onClick={handleClose} className="close">
          X
        </button>

        <li className="links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-white" : "text-inactive"
            }
            onClick={handleClose}
          >
            Inicio
          </NavLink>
        </li>

        <li className="links">
          <NavLink
            to="/order-moover"
            className={({ isActive }) =>
              isActive ? "text-white" : "text-inactive"
            }
            onClick={handleClose}
          >
            Solicitar Moover
          </NavLink>
        </li>

        <li className="links">
          <NavLink
            to="/view-packaje"
            className={({ isActive }) =>
              isActive ? "text-white" : "text-inactive"
            }
            onClick={handleClose}
          >
            Estado del Paquete
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
