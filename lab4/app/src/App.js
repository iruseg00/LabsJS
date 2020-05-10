import React from 'react';
import { Router , Switch , Route } from "react-router-dom";
import './App.css';
import history from "./components/helper/history";
import { Provider }  from "react-redux";
import Header from "./components/header/Header";
import TabWeeks from "./components/tabWeeks/TabWeeks";

function App() {
  return (
    <Router history={history}>
      <Header/>
      <Switch>
        <Route
          exact
          path="/" 
          component={TabWeeks}
        />
      </Switch> 
    </Router>
  );
}

export default App;
