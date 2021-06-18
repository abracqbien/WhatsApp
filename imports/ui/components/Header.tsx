import React from "react"

// Icons
import FontAwesome from "react-fontawesome"

// Styles
import StyledHeader from "../elements/StyledHeader"

const Header = (props:any):JSX.Element => {
  const { icons, iconClass } = props

  // Functions
  const renderIcons = ():JSX.Element[] => {
    return icons.map((icon:string, i:number) => (
      <FontAwesome
        key={i}
        className={iconClass}
        name={icon}
      />
    ))
  }

  return (
    <StyledHeader>
      {props.children}
      <div className={props.iconsWidthSmall ? "icons--left small" : "icons--left"}>
        {renderIcons()}
      </div>
    </StyledHeader>
  )
}

export default Header