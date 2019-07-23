import React, { useState } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import { navArr, subNavArr } from '../utils/data';
import { makeObjects } from '../utils/helpers';

import NavItem from './NavItem';

const StyledTopNav = styled.div`
  width: 100%;
  background-color: #282c34;
  padding: 4px 0 0 45%;
  display: flex;
  align-items: center;
`

const NavWrapper = () => {
  const [navState, setNavState] = useState({});
  const [subNavState, setSubNavState] = useState('');

  const master = makeObjects(navArr, subNavArr);
  const objRef = {};

  return (
    <>
      <StyledTopNav>
        {master.map((obj, index) => {
          return <NavItem key={index} props={obj} />
        })}
      </StyledTopNav>
    </>
  );


}

export default NavWrapper;