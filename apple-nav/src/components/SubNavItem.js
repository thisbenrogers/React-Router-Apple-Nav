import React from 'react';
import styled from 'styled-components';


const SubNavItem = (props, index) => {

  const item = props.props;

  const StyledDiv = styled.div`
  
  `

  const StyledP = styled.p`
    color: #111111;
  `

  const StyledFigure = styled.figure`
    width: 58px;
    height: 54px;
    background-size: 58px 54px;
    background-repeat: no-repeat;
    background-image: url(${item.url});
  `

  return (
    <StyledDiv>
      <StyledFigure className={props.index} />
      <StyledP>{item.name}</StyledP>
      <small>{item.isNew.toString()}</small>
    </StyledDiv>
  )
}

export default SubNavItem;