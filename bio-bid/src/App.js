import React from "react";
import { Route } from "react-router-dom";

// Component Imports
import Bids from './components/bids';
import Form from './components/company-profile/Form/Form';
import Details from './components/company-profile/Details/Details';
import List from './components/company-profile/List/List';

function App() {
  return (
    <div className="App">
      <Route path="/bids">
        <Bids />
      </Route>
      <Route exact path="/service-providers">
        <List />
      </Route>
      <Route path="/service-provider/add">
        <Form edit={false} />
      </Route>
      <Route path="/service-providers/:id">
        <Details />
      </Route>
      <Route path="/service-provider/edit/:id">
        <Form edit={true} />
      </Route>
    </div>
  );
}

export default App;
