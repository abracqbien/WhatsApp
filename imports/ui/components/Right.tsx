import React from "react"

// Components
import RightImg from './RightImg'

// Styles
import StyledRight from "../elements/StyledRight"

// Constantes
const messageText:string = "Whatsapp se connecte à votre téléphone pour synchroniser les messages. Pour réduire l'utilisation des données, connectez votre téléphone à un réseau WI-FI."

const Right = (props:any):JSX.Element => {
  return (
    <StyledRight>
      <RightImg right={props.right} messageText={messageText} />
    </StyledRight>
  )
}

export default Right