import React from "react"

// Styles
import StyledRightImg from "../elements/StyledRightImg"

const RightImg = (props:any):JSX.Element => {
  return (
    <StyledRightImg right={props.right}>
      <img 
        src="./images/whatsapp-bg-1.jpg"
        className="rightImg--image"
        alt="bg"
      />
      <h3 className="rightImg--title">
        Gardez Votre Téléphone connecté
      </h3>
      <div className="rightImg--div">
        <p className="rightImg--p">
          {props.messageText}
        </p>
        <div className="rightImg--divider" />
      </div>
    </StyledRightImg>
  )
}

export default RightImg