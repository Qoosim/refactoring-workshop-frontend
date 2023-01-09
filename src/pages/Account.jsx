import React from "react"
import "../styles/account.css"

export const Account = () => {
  return (
    <section className="accountInfo">
      <div className="container boxItems">
        <h1>Account Information</h1>
        <div className="content">
          <div className="left">
            <div className="img flexCenter">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
                alt=""
                className="image-preview"
              />
            </div>
          </div>
          <div className="right">
            <label>Email</label>
            <input type="text" required />
            <label>Password * </label>
            <input type="text" required />
            <button className="button">Update</button>
          </div>
        </div>
      </div>
    </section>
  )
}
