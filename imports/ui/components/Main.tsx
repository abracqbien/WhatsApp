import React from 'react'
import { Meteor } from "meteor/meteor"
import { Tracker } from "meteor/tracker"

// Components
import Right from "./Right"
import Left from "./Left"

import { ChatsCollection } from '../../api/chats'

// Styles
import StyledMain from '../elements/StyledMain'

const Main = (props:any):JSX.Element => {
  Tracker.autorun(() => {
    Meteor.subscribe('chats.mine')
    console.log("chats", ChatsCollection.find().fetch())
  })

  return (
    <StyledMain>
      <Left />
      <Right right />
    </StyledMain>
  )
}

export default Main
