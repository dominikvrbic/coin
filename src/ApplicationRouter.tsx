import React from "react";
import { observer } from "mobx-react";
import { Switch, Route, Router } from "react-router-dom";
import { Home } from "./pages/Home";

import { history } from "./router/routerStore";
import { css } from "emotion";
import { Currency } from "./pages/Currency";

interface Props {
  data: 1;
}

const mainContentStyle = css({
  flexGrow: 1,
});

const ApplicationRouter = observer((props: Props) => {
  const { data } = props;
  return (
    <Router history={history}>
      <div className={mainContentStyle}>
        <Switch>
          <Route exact path="/" component={Home} data={data} />
          <Route
            exact
            path="/currency/:name"
            component={() => <Currency data={data} />}
          />
        </Switch>
      </div>
    </Router>
  );
});

export default ApplicationRouter;
