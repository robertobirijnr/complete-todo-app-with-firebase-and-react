import React from "react";
import Header from "./components/Header";
import Route from "./components/Route";
import { BrowserRouter as Router } from "react-router-dom";
import Form from "./components/Form";

function App() {
  return (
    <Router>
      <div className="app">
        <Form />
        <div className="browser">
          <Header />
          <div className="viewport">
            <Route />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
