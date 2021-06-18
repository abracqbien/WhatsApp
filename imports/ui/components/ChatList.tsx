import React from "react"

// Models
import { Chat } from "../../api/models"

// Components
import ChatItem from "./ChatItem"

// Styles
import StyledChatList from "../elements/StyledChatList"

const ChatList = (props:any):JSX.Element => {
  const { chats } = props

  // Functions
  const renderChats = ():JSX.Element[] => {
    return chats.map((chat:Chat) => (
      <ChatItem key={chat._id} {...chat} />
    ))
  }

  return (
    <StyledChatList>
      {renderChats()}
    </StyledChatList>
  )
}

export default ChatList