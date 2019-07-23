import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import NavWrapper from './components/NavWrapper';
import SubNav from './components/SubNav';
import Destination from './components/Destination';

import { navArr, subNavArr } from './utils/data';
import { makeObjects } from './utils/helpers';

import './App.css';

makeObjects(navArr, subNavArr);


function App() {
  const [navState, setNavState] = useState('');
  const [subNavState, setSubNavState] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <NavWrapper />
      </header>
      <Route path="/" exact component={NavWrapper} />
      <Route path={`/${navState}`} component={SubNav} />
      <Route path={`/${navState}/${subNavState}`} component={Destination} />
    </div>
  );
}

export default App;
