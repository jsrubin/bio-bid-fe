import React from 'react';
import { Route } from 'react-router-dom';

// Component Imports
import Bids from './components/bids';
import Form from './components/company-profile/Form/Form';


function App() {
  return (
    <div>
      <Route path='/bids'>
        <Bids/>
      </Route>
      <Route path='/service-providers'>

      </Route>
      <Route path='/service-providers/:id'>

      </Route>
      <Route path='/service-providers/add'>
        <Form edit={false}/>
      </Route>
      <Route path='/service-providers/edit/:id'>
        <Form edit={true}/>
      </Route>
    </div>
  );
}

export default App;