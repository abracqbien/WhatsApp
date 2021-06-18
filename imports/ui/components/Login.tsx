import React from 'react'

// Components
import FormLogin from './FormLogin'
import RightImg from './RightImg'

// Constantes
const messageText:string = "Connectez vous afin de lancer une conversation"

const Login = (props:any):JSX.Element => {

  // Functions
  const handleLogin = (state:any):void => {
    
  }

  return (
    <RightImg messageText={messageText}>
      <FormLogin onLogin={handleLogin} />
    </RightImg>
  )
}

export default Login
