import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

//

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Nav />
          <Jumbotron>
            <h1>Google Books Search</h1>
          </Jumbotron>
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
