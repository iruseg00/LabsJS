import React from 'react';
import { Router , Switch , Route } from "react-router-dom";
import './App.css';
import history from "./components/helper/history";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route
          exact
          path="/" 
          component={Layout}
        />
      </Switch> 
    </Router>
  );
}

export default App;
