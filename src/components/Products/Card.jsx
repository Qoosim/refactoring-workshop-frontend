import React, { useState } from "react"
import { AiOutlineClose } from "react-icons/ai"
import { BiShoppingBag } from "react-icons/bi"
import { useSelector } from "react-redux"
import { CartItems } from "./CartItems"

export const Card = () => {
  const [cardOpen, setCardOpen] = useState(false)
  const closeCard = () => {
    setCardOpen(null)
  }

  const quantity = useSelector((state) => state.cart.totalQuantity)
  const cartItems = useSelector((state) => state.cart.list)

  let total = 0
  const lists = useSelector((state) => state.cart.list)
  
  lists.forEach((item) => {
    total += item.totalPrice
  })

  return (
    <>
      <div className="card" onClick={() => setCardOpen(!cardOpen)}>
        <BiShoppingBag className="cardIcon" />
        <span className="flexCenter">{quantity}</span>
      </div>
      <div className={cardOpen ? "overlay" : "nonoverlay"}></div>

      <div className={cardOpen ? "cartItem" : "cardhide"}>
        <div className="title flex">
          <h2>Shopping Cart</h2>
          <button onClick={closeCard}>
            <AiOutlineClose className="icon" />
          </button>
        </div>
        {cartItems.map((item) => (
          <CartItems
            id={item.id}
            cover={item.cover}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            totalPrice={item.totalPrice}
          />
        ))}

        <div className="checkOut">
          <button>
            <span>CHECKOUT</span>
            <label htmlFor="">${total.toFixed(2)}</label>
          </button>
        </div>
      </div>
    </>
  )
}
