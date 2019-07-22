import React from 'react';

import NavWrapper from './components/NavWrapper';
import NavItem from './components/NavItem';
import SubNavItem from './components/SubNavItem';


import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Apple Nav</p>
        <NavWrapper />
        <NavItem />
        <SubNavItem />
      </header>
    </div>
  );
}

export default App;
