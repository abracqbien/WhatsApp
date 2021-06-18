import React from 'react'

// Styles
import StyledFormLogin from '../elements/StyledFormLogin'

const FormLogin = (props:any):JSX.Element => {
  return (
    <StyledFormLogin>
      <label className="label">
        <input
          type="text"
          className="input"
          name="username"
          placeholder="Nom d'Utilisateur"
        />
      </label>
      <label className="label">
        <input
          type="text"
          className="input"
          name="phone"
          placeholder="Téléphone"
        />
      </label>
      <label className="label">
        <input
          type="password"
          className="input"
          name="password"
          placeholder="Mot de passe"
        />
      </label>
      <button className="loginBtn">CONNEXION</button>
    </StyledFormLogin>
  )
}

export default FormLogin
