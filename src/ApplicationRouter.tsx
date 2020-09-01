import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

import { css } from "emotion";
import Currency from "./pages/Currency";
import { Header } from "./components/Header";

interface Props {
  limit: number;
}

const mainContentStyle = css({
  display: "flex",
  justifyContent: "center",
});

const ApplicationRouter = (props: Props) => {
  const { limit } = props;
  return (
    <Router>
      <Header limit={limit} />
      <div className={mainContentStyle}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/currency/:name" component={Currency} />
        </Switch>
      </div>
    </Router>
  );
};

export default ApplicationRouter;
