import { useState } from "react";
import { SideNav, SideNavItems } from "@carbon/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./sideBar.css";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <div className="sidebar-wrapper">
      <SideNav
        aria-label="Side navigation"
        className={`sidebar-container ${isSidebarOpen ? "open" : "closed"}`}
      >
        <SideNavItems>
          <div className="sidebar-item">Starships</div>
          <div className="sidebar-item">Vehicles</div>
          <div className="sidebar-item">Species</div>
          <div className="sidebar-item">People</div>
          <div className="sidebar-item">Planets</div>
        </SideNavItems>

        <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
          <FontAwesomeIcon
            icon={isSidebarOpen ? faChevronLeft : faChevronRight}
            className="sidebar-toggle-icon"
          />
        </button>
      </SideNav>
    </div>
  );
};

export default Sidebar;
