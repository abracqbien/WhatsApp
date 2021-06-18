import React from "react"
import { Meteor } from "meteor/meteor"

// Components
import Header from "./Header"
import Avatar from "./Avatar"
import Status from "./Status"

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
      <Status />
    </StyledLeft>
  )
}

export default Left