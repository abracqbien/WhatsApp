import React from "react"
import { Meteor } from "meteor/meteor"

// Components
import Header from "./Header"
import Avatar from "./Avatar"

// Styles
import StyledLeft from "../elements/StyledLeft"

// Constantes
const icons:string[] = [ "circle-notch", "comment-alt", "ellipsis-v" ]

const Left = (props:any):JSX.Element => {
  return (
    <StyledLeft>
      <Header icons={icons} iconClass="greyIcon">
        <Avatar avatar_url={Meteor.user().profile.picture} />
      </Header>
    </StyledLeft>
  )
}

export default Left