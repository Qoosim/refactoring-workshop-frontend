import React from "react"
import { useDispatch } from "react-redux"
import { authActions } from "../redux/store"
import "../styles/login.css"

export const Login = () => {
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(authActions.login())
  }
  return (
    <section className="login">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <span>Username or Email address</span>
          <input type="text" required />
          <span>Password * </span>
          <input type="password" required />
          <button className="button">Log in </button>
        </form>
      </div>
    </section>
  )
}
