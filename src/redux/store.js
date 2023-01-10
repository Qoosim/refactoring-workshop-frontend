import { configureStore, createSlice } from "@reduxjs/toolkit"

export const authRedux = createSlice({
  name: "auth",
  initialState: { authenticated: true },
  reducers: {
    login(state) {
      state.authenticated = true
    },
    logout(state) {
      state.authenticated = false
    },
  },
})

export const authActions = authRedux.actions

export const cartRedux = createSlice({
  name: "cart",
  initialState: {
    list: [],
    totalQuantity: 0,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload

      const exitsItem = state.list.find((item) => item.id === newItem.id)

      if (exitsItem) {
        exitsItem.quantity++
        exitsItem.totalPrice += newItem.price
      } else {
        state.list.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
          cover: newItem.cover,
        })
        state.totalQuantity++
      }
    },
    delete(state, action) {
      const id = action.payload
      state.list = state.list.filter((item) => item.id !== id)
      state.totalQuantity--
    },
    removeFromCart(state, action) {
      const id = action.payload
      const exitstingItem = state.list.find((item) => item.id === id)
      if (exitstingItem.quantity === 1) {
        state.list = state.list.filter((item) => item.id !== id)
        state.totalQuantity--
      } else {
        exitstingItem.quantity--
        exitstingItem.totalPrice -= exitstingItem.price
      }
    },
  },
})

export const cartActions = cartRedux.actions

const store = configureStore({
  reducer: {
    auth: authRedux.reducer,
    cart: cartRedux.reducer,
  },
})

export default store
