import React from "react"
import { useSelector } from "react-redux"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Footer } from "./components/footer/Footer"
import { Header } from "./components/header/Header"
import { Home } from "./pages/Home"
import { Account } from "./pages/Account"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"

const App = () => {
  const authenticated = useSelector((state) => state.auth.authenticated)

  return (
    <>
      {authenticated && (
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/account" component={Account} />
          </Switch>
          <Footer />
        </Router>
      )}
      {!authenticated && <Login />}
    </>
  )
}
export default App
