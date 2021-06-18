import React from 'react'

// Styles
import StyledFormLogin from '../elements/StyledFormLogin'

const FormLogin = (props:any):JSX.Element => {
  // State
  const [state, setState] = React.useState<any>({
    username: "",
    password: "",
    phone: "",
  })
  const { username, password, phone } = state

  // Functions
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
    const inputValue:string = e.target.value
    const inputName:string = e.target.name

    setState(prevState => (
      {
        ...prevState,
        [inputName]: inputValue
      }
    ))
  }

  return (
    <StyledFormLogin>
      <label className="label">
        <input
          onChange={handleChange}
          value={username}
          placeholder="Nom d'Utilisateur"
          className="input"
          name="username"
          type="text"
        />
      </label>
      <label className="label">
        <input
          onChange={handleChange}
          value={phone}
          placeholder="Téléphone"
          className="input"
          name="phone"
          type="text"
        />
      </label>
      <label className="label">
        <input
          onChange={handleChange}
          value={password}
          placeholder="Mot de passe"
          className="input"
          type="password"
          name="password"
        />
      </label>
      <button className="loginBtn">CONNEXION</button>
    </StyledFormLogin>
  )
}

export default FormLogin
