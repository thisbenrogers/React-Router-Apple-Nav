import React from 'react';
import styled from 'styled-components';

import SubNav from './SubNav';

const StyledNavText = styled.button`
  border: none;
  background-color: inherit;
  color: inherit;
  margin: 0 38px 0 38px;
  font-size: 14px;
  font-family: "SF Pro Text","Myriad Set Pro","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
  :focus {
    outline: 0;
  }
  :hover {
    cursor: pointer;
  }
`



const StyledNavImg = styled.img`
  margin: 0 38px 0 38px;
  :hover {
    cursor: pointer;
  }
`

const NavItem = props => {
  const { name, rend, subNav } = props.props;

  return (name === 'ICON') ?
    <StyledNavImg src={rend} alt={name} /> :
    <StyledNavText>{name}</StyledNavText>
}

export default NavItem;