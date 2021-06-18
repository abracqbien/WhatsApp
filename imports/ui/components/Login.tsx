import React from 'react'

// Components
import FormLogin from './FormLogin'
import RightImg from './RightImg'

// Constantes
const messageText:string = "Connectez vous afin de lancer une conversation"

const Login = (props:any):JSX.Element => {
  return (
    <RightImg messageText={messageText}>
      <FormLogin />
    </RightImg>
  )
}

export default Login
