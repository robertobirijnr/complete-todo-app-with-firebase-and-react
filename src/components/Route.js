import React from "react";
import { Switch, Route } from "react-router-dom";
import Todo from "../pages/Todo";
import Done from "../pages/Done";
import Overdue from "../pages/Overdue";

const Router = () => {
  return (
    <div>
      <Switch>
        <Route path="/overdue">
          <Overdue />
        </Route>
        <Route path="/done">
          <Done />
        </Route>
        <Route path="/" exact={true}>
          <Todo />
        </Route>
      </Switch>
    </div>
  );
};

export default Router;
