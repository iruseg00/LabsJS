import React from 'react';
import { Router , Switch , Route } from "react-router-dom";
import './App.css';
import history from "./helper/history";
import { Provider }  from "react-redux";
import Header from "./components/header/Header";
import Table from "./components/table/Table";
import Store from "./redux/store/store"

function App() {
  return (
    <Router history={history}>
      <Header/>
      <Provider store={Store}>
        <Switch>
          <Route
            exact
            path="/" 
            component={Table}
          />
        </Switch> 
      </Provider>
    </Router>
  );
}

export default App;
