import React from 'react'
import { Meteor } from 'meteor/meteor'

// Components
import FormLogin from './FormLogin'
import RightImg from './RightImg'

// Constantes
const messageText:string = "Connectez vous afin de lancer une conversation"

const Login = (props:any):JSX.Element => {
  // Functions
  const handleLogin = (state:any):void => {
    Meteor.call("user.login", state, (err, res) => {
      const { password, username } = state
      if (err) {
        console.log("error login", err)
      } else {
        Meteor.loginWithPassword(username, password, (err) => {
          if (err) {
            console.log("error login with password", err)
          } else {
            console.log("resultat with password", res)
            props.history.push("/chats")
          }
        })
      }
    })
  }

  return (
    <RightImg messageText={messageText}>
      <FormLogin onLogin={handleLogin} />
    </RightImg>
  )
}

export default Login
