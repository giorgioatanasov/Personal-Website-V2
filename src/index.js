import ReactDOM from "react-dom";
import React, { Component } from "react";
import MainPage from "./Components/Pages/HomePage/MainPage.js";
import NotFound from "./Components/Pages/404/404.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import * as serviceWorker from "./serviceWorker";

const TITLE = "Giorgio Atanasov | Software Engineer";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <Switch>
        <Route exact path="/" component={MainPage}></Route>
        <Route exact path="/home" component={MainPage}></Route>
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
