import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import NavWrapper from './components/NavWrapper';
import SubNav from './components/SubNav';
import Destination from './components/Destination';

import './App.css';


function App() {
  const [navState, setNavState] = useState('');
  const [subNavState, setSubNavState] = useState('');

  const navArray = ['🍎', 'Mac', 'iPad', 'iPhone', 'Watch', 'TV', 'Music', 'Support', '🔍', '🛒'];
  const subNavObj = [
    [],
    ['MacBook Air', 'MacBook Pro', 'iMac', 'iMac Pro', 'Mac Pro', 'Mac mini', 'Compare', 'Pro Dislay XDR', 'Accessories', 'Mojave'],
    ['iPad Pro', 'iPad Air', 'iPad', 'iPad mini', 'Compare', 'Apple Pencil', 'Smart Keyboard', 'Accessories', 'iOS 12'],
    ['iPhone Xs', 'iPhone Xr', 'iPhone 8', 'iPhone 7', 'Compare', 'Apple Card', 'AirPods', 'Accessories', 'iOS 12'],
    ['Apple Watch Series 4', 'Apple Watch Nike+', 'Apple Watch Hermès', 'Apple Watch Series 3', 'watchOS', 'Bands', 'Accessories', 'Compare'],
    ['Apple TV App', 'Apple TV+', 'Apple TV 4K', 'Apple TV HD', 'AirPlay', 'Accessories'],
    ['Apple Music', 'iTunes', 'HomePod', 'AirPods', 'iPod touch', 'Music Accessories', 'Gift Cards'],
    [],
    [],
    [],
  ]

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
