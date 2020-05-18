import React from 'react';
import { Route } from 'react-router-dom';

// Component Imports
import Bids from './components/bids';


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
      <Route path='/service-providers/form'>

      </Route>
    </div>
  );
}

export default App;