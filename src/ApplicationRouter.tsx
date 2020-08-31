import React from "react";
import { observer } from "mobx-react";
import { Switch, Route, Router } from "react-router-dom";
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
  flexGrow: 1,
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
            path="/currency/:id"
            component={Currency}
          />
        </Switch>
      </div>
    </Router>
  );
});

export default ApplicationRouter;
