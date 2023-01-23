import React from "react"
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { cartActions } from "../../redux/store"

export const CartItems = ({ id, cover, name, price, quantity, totalPrice }) => {
  const dispatch = useDispatch()

  const incrementCartItems = () => {
    dispatch(cartActions.addToCart({ id, name, price }))
  }
  const decrementCartItems = () => {
    dispatch(cartActions.removeFromCart(id))
  }
  const deleteCartItems = () => {
    dispatch(cartActions.delete(id))
  }
  return (
    <>
      <div className="cardList" key={id}>
        <div className="cartContent">
          <div className="img" onClick={deleteCartItems}>
            <img src={cover} alt="" />
            <button className="remove flexCenter" >
              <AiOutlineClose />
            </button>
          </div>
          <div className="details">
            <p>{name}</p>
            <label htmlFor="">Unit Price ${price}</label>

            <div className="price">
              <div className="qty flexCenter">
                <button className="plus" onClick={incrementCartItems}>
                  <AiOutlineMinus />
                </button>
                <button className="num">{quantity}</button>
                <button className="minus" onClick={incrementCartItems}>
                  <AiOutlinePlus />
                </button>
              </div>
              <div className="priceTitle">${totalPrice}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
