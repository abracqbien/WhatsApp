import React from "react"

// Icons
import FontAwesome from "react-fontawesome"

// Styles
import StyledLeftStatus from "../elements/StyledStatus"
import StyledAvatar from "../elements/StyledAvatar"

const Status = (props:any):JSX.Element => {

  return (
    <StyledLeftStatus color="blue">
      <StyledAvatar>
        <FontAwesome
          className="icon--color"
          name="bell-slash"
          size="2x"
        />
      </StyledAvatar>
      <div className="status--textContainer">
        <div className="text--big">
          Etre Averti(e) de nouveaux messages.
        </div>
        <span className="text--small">
          Afficher les notifications sur le bureau
        </span>
      </div>
    </StyledLeftStatus>
  )
}

export default Status