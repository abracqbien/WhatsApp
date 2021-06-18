import React from 'react'

// Components
import Right from "./Right"
import Left from "./Left"

// Styles
import StyledMain from '../elements/StyledMain'

const Main = (props:any):JSX.Element => {
  return (
    <StyledMain>
      <Left />
      <Right right />
    </StyledMain>
  )
}

export default Main
