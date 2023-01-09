import React, { useState } from "react"
import { AiOutlineHeart } from "react-icons/ai"
import { BiLogOut } from "react-icons/bi"
import { BsBagCheck } from "react-icons/bs"
import { GrHelp } from "react-icons/gr"
import { IoSettingsOutline } from "react-icons/io5"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { authActions } from "../store/"

export const User = () => {
  const user = true
  const [open, setOpen] = useState(false)

  const close = () => {
    setOpen(null)
  }

  const dispatch = useDispatch()
  const logoutHandler = (e) => {
    dispatch(authActions.logout())
  }
  return (
    <>
      <div className="profile">
        {user ? (
          <>
            <button className="img" onClick={() => setOpen(!open)}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
                alt=""
              />
            </button>

            {open && (
              <div className="openProfile boxItems" onClick={close}>
                <div className="image">
                  <Link to="/account">
                    <div className="img">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
                        alt=""
                      />
                    </div>
                  </Link>
                  <div className="text">
                    <h4>Joe Smith</h4>
                    <label htmlFor="">Los Angeles,CA</label>
                  </div>
                </div>
                <Link to="/account">
                  <button className="box">
                    <IoSettingsOutline className="icon" />
                    <h4>My Account</h4>
                  </button>
                </Link>
                <button className="box">
                  <BsBagCheck className="icon" />
                  <h4>My Order</h4>
                </button>
                <button className="box">
                  <AiOutlineHeart className="icon" />
                  <h4>Wishlist</h4>
                </button>
                <button className="box">
                  <GrHelp className="icon" />
                  <h4>Help</h4>
                </button>
                <button className="box" onClick={logoutHandler}>
                  <BiLogOut className="icon" />
                  <h4>Log Out</h4>
                </button>
              </div>
            )}
          </>
        ) : (
          <button>My Account</button>
        )}
      </div>
    </>
  )
}
