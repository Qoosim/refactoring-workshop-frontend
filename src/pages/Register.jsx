import React from "react"
import "../styles/login.css"

export const Register = () => {
  return (
    <>
      <section className="login">
        <div className="container">
          <form>
            <span>Email address</span>
            <input type="text" required />
            <span>Username * </span>
            <input type="text" required />
            <span>Password * </span>
            <input type="text" required />
            <span>Confirm Password * </span>
            <input type="text" required />
            <button className="button">Register</button>
          </form>
        </div>
      </section>
    </>
  )
}
