import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { navArr, subNavArr } from '../utils/data';
import { makeObjects } from '../utils/helpers';

import NavItem from './NavItem';

const NavWrapper = () => {
  const [navState, setNavState] = useState({});
  const [subNavState, setSubNavState] = useState('');

  const master = makeObjects(navArr, subNavArr);

  return (
    <>
      {master.map((obj, index) => {
        return <NavItem key={index} props={obj} />
      })}
    </>
  );


}

export default NavWrapper;