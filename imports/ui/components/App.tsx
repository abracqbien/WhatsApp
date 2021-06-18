import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"

// Components
import Login from "./Login"
import Main from "./Main"

// Styles
import theme from "../theme/NormalTheme"

const App = (props:any):JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" component={Login} />  
          <Route path="/chats" component={Main} />  
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
