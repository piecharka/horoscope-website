import { useState, useContext } from "react";
import classes from "./Sidebar.module.css";
import HoroscopeContext from "../../store/horoscope-ctx";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons/lib";
const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const ctx = useContext(HoroscopeContext);
  const showSideBar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: "fff" }}>
        <div className={classes.navbar}>
          <Link to="#" className={classes.menu_bars}>
            <FaIcons.FaBars onClick={showSideBar} />
          </Link>
          <h1 className={classes.header}>{ctx.sign}</h1>
        </div>
        <nav
          className={
            sidebar ? `${classes.nav_menu} ${classes.active}` : classes.nav_menu
          }
        >
          <ul className={classes.nav_menu_items}>
            <li className={classes.navbar_toggle}>
              <Link to="#" className={classes.menu_bars}>
                <AiIcons.AiOutlineClose onClick={showSideBar} />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <NavLink activeClassName={classes.active} to={item.path}>
                    <span>{item.title}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
