import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import Nav from './Nav';
import SubNav from './SubNav';

const NavWrapper = () => {

  return (
    <>
      <p>NavWrapper</p>
      <Nav />
      <SubNav />
    </>
  )
}

export default NavWrapper;