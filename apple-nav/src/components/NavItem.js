import React from 'react';

import SubNav from './SubNav';

const NavItem = props => {
  const { name, rend, subNav } = props.props;

  console.log("Props: ", props);

  return (
    <>
      {(name === 'ICON') ? <img src={rend} alt={name} /> : <p>{rend}</p>}
    </>
  )
}

export default NavItem;