import React from "react";
import { observer } from "mobx-react";
import { Router, Switch, Route } from "react-router"
import { Home } from "./pages/Home";

import { history } from "./stores/routerStore";
import { css } from "emotion";
import { Currency } from "./pages/Currency";
import { sort } from "./sortresults";
import { coinStore } from "./stores/coinStore";
import { Header } from "./components/Header";

interface Props {
  data: any;
}

const mainContentStyle = css({
  display: 'flex',
  justifyContent: 'center',
});

const ApplicationRouter = observer((props: Props) => {
  const { data } = props;

  coinStore.setCoins(sort(data));
  return (
    <Router history={history}>
      <Header />
      <div className={mainContentStyle}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/currency/:name"
            component={Currency}
          />
        </Switch>
      </div>
    </Router>
  );
});

export default ApplicationRouter;
