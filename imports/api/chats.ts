import { Meteor } from "meteor/meteor"
import { Mongo } from "meteor/mongo"
import moment from "moment"

// Models
import { Chat } from "./models"

export const ChatsCollection = new Mongo.Collection<Chat>('Chats')

export const dummyChats:Chat[] = [
  {
    title: "",
    picture: "",
    participants: [ "3B2iqaWegiqxMWs2g", "ze8iRiSwxjee45SQJ" ],
    lastMessage: {
      content: "Salut ça va ?",
      createdAt: moment().toDate()
    }
  },
  {
    title: "",
    picture: "",
    participants: [ "ze8iRiSwxjee45SQJ", "3B2iqaWegiqxMWs2g" ],
    lastMessage: {
      content: "Salut comment tu vas ?",
      createdAt: moment().subtract(1, 'days').toDate()
    }
  },
  {
    title: "",
    picture: "",
    participants: [ "ze8iRiSwxjee45SQJ", "4Awv4kH27Ys5kakM8" ],
    lastMessage: {
      content: "Hello !!",
      createdAt: moment().subtract(2, 'days').toDate()
    }
  }
] 

if (Meteor.isServer) {
  Meteor.publish("chats.all", () => {
    return ChatsCollection.find()
  })
  Meteor.publish('chats.mine', function() {
    return ChatsCollection.find({ 
      participants: {
        $in: [ this.userId ]
      }
     })
  })
}