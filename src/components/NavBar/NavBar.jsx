import React, { useRef, useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./NavBar.css";
import { gsap } from "gsap";
import { listNavBar } from "../../helpers/listNavBar";

const NavBar = () => {
  const el = useRef();
  const closeRef = useRef(null);
  const listRef = useRef([]);
  listRef.current = [];

  const [toggle, setToggle] = useState(false);
  

  const location = useLocation();

  const timeline = gsap.timeline({
    defaults: { duration: 0.2, ease: "power2.out" },
  });

  useEffect(() => {
      if(toggle) {
        timeline.to(el.current, {
          opacity: 1,
          zIndex: 20,
        });
        listRef.current.forEach((list) => {
          timeline.to(list, {
            opacity: 1,
            stagger: 0.1,
          });
        });
        timeline.to(
          closeRef.current,
          {
            opacity: 1,
          },
          "-=.1"
        );
      }
  }, [toggle])
  
  
  const handleShow = () => {
    setToggle(!toggle)
  };
  
  const handleClose = () => {
    timeline.reversed(true);
    setToggle(!toggle)
  };

  const addRefList = (el) => {
    if (el && !listRef.current.includes(el)) listRef.current.push(el);
  };

  return (
    <>
      <nav className="navbarShow">
        <div className="navigation">
          <h2 className="title-Nav">MOOVER</h2>
          <div className="box"></div>
          <button
            className={
              location.pathname !== "/" ? "color-orangeMenu" : `menuShow`
            }
            onClick={handleShow}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
      <ul ref={el} className={"navbar"}>
        <button ref={closeRef} onClick={handleClose} className="close">
          X
        </button>

        {listNavBar.map(({ title, path }) => (
          <li className="links" key={title} ref={addRefList}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive ? "link-active" : "text-inactive"
              }
              onClick={handleClose}
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavBar;
