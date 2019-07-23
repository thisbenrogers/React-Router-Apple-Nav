import React from 'react';
import styled from 'styled-components';

import SubNavItem from './SubNavItem';

const StyledDiv = styled.div`
  display: flex;
`

const SubNav = props => {
  const arr = props.arr;

  return (
    <StyledDiv>
      {arr.map((item, index) => {
        return <SubNavItem index={index} key={index} props={item} />
      })}
    </StyledDiv>
  )
}

export default SubNav;