import { Accounts } from "meteor/accounts-base"

// Models
import { User, Chat } from "./models"
import { ChatsCollection } from './chats'

export const createDummyUsers = (users:User[]):void => {
  users.forEach(user => {
    const { username, profile, password } = user
    Accounts.createUser({
      username,
      password,
      profile
    })
  })
}

export const createDummyChats = (chats:Chat[]):void => {
  chats.forEach(chat => {
    ChatsCollection.insert(chat)
  })
}