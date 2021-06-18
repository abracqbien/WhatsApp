import { Meteor } from 'meteor/meteor'

// Helpers
import { createDummyChats, createDummyUsers } from "../imports/api/helpers"

// Utils
import { ChatsCollection, dummyChats } from '../imports/api/chats'
import { dummyUsers } from "../imports/api/users"

Meteor.startup(() => {
  const numberOfUsers:number = Meteor.users.find().count()
  const numberOfChats:number = ChatsCollection.find().count()

  if (numberOfUsers === 0) {
    createDummyUsers(dummyUsers)
  } else {
    console.log("Il y a des utilisateurs")
  }

  if (numberOfChats === 0) {
    createDummyChats(dummyChats)
  } else {
    console.log("Il y a des chats")
  }
})
