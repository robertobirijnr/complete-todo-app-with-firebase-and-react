import React from "react";
import "./layout.css";

const Layout = () => {
  return (
    <div className="App">
      <form id="to-do-form">
        <input type="text" placeholder="Enter Text" />
        <button type="submit">Add</button>
      </form>
      <div className="pc-tab">
        <input defaultChecked="checked" id="tab1" type="radio" name="pct" />
        <input id="tab2" type="radio" name="pct" />
        <input id="tab3" type="radio" name="pct" />

        <nav>
          <ul>
            <li className="tab1">
              <label htmlFor="tab1">ToDo</label>
            </li>
            <li className="tab2">
              <label htmlFor="tab2">Done</label>
            </li>
            <li className="tab3">
              <label htmlFor="tab3">Overdue</label>
            </li>
          </ul>
        </nav>

        <section>
          <div className="tab1">
            <h1>ToDo</h1>
            
          </div>
          <div className="tab2">
            <h1>Done</h1>
            
          </div>
          <div className="tab3">
            <h1>Overdue</h1>
            
          </div>
        </section>
      </div>
    </div>
  );
};

export default Layout;
