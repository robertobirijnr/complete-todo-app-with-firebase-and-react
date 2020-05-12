import React from "react";
import Tab from "./Tabs";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="tabs">
        <Tab>
          <NavLink to="/" activeClassName="is-active" exact={true}>
            ToDo
          </NavLink>
        </Tab>
        <Tab>
          <NavLink to="/done" activeClassName="is-active">
            Done
          </NavLink>
        </Tab>
        <Tab>
          <NavLink to="overdue" activeClassName="is-active">
            OverDue{" "}
          </NavLink>
        </Tab>
      </div>
    </div>
  );
};

export default Header;
