import { configureStore } from '@reduxjs/toolkit'
import product from './categoriesSlice'
import cart from './cartSlice'

export const store = configureStore({
  reducer: {
    product,
    cart
  },
})