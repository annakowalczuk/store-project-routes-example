import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { MainLayout } from "./components/MainLayout";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { User } from "./components/User";
import { Terms } from "./components/Terms";
import { Faq } from "./components/Faq";
import { Contact } from "./components/Contact";

import './index.css';
import { NoMatch } from "./components/NoMatch";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route exact path={"/"} component={Root} />
            <Route exact path={"/home"} component={Home} />
            <Route exact path={"/user"} component={User} />
            <Route exact path={"/faq"} component={Faq} />
            <Route exact path={"/terms"} component={Terms} />
            <Route exact path={"/contact"} component={Contact} />
            <Route component={NoMatch} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    );
  }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
