import React from 'react';
import { Route } from 'react-router-dom';

import NavWrapper from './components/NavWrapper';
// import Nav from './components/Nav';
// import SubNav from './components/SubNav';

import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Route path="/" component={NavWrapper} />
      </header>
    </div>
  );
}

export default App;
