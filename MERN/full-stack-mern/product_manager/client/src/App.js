import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Detail from './views/Detail';
import HomePage from './views/HomePage'
import Update from './views/Update'
function App() {
  return (
    <div className="App">
      <Router>
        <HomePage path='/' />
        <Main path="products/"/>
        <Detail path="products/:_id" />
        <Update path="products/update/:_id"/>
      </Router>
    </div>
  );
}
export default App;

