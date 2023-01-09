import React from "react"
import { Link } from "react-router-dom"
import { Card } from "../UI/Card"
import "./header.css"
import { User } from "../../pages/User"

export const Header = () => {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header")
    header.classList.toggle("active", this.window.scrollY > 100)
  })
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })

  return (
    <header className="header">
      <div className="container flex">
        <div>
          <Link to="/" className="logo">
            <div>
              <img
                src="src/assets/images/microverse-logo.png"
                alt="MV Logo"
                width="40"
              />
            </div>{" "}
            <div>Webshop</div>
          </Link>
        </div>
        <div className="account flexCenter">
          <Card />
          <User />
        </div>
      </div>
    </header>
  )
}
