import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedCategory: 'perfume',
}

export const categoriesSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    filterCategory: (state, action) => {
      state.selectedCategory = action.payload
    },
  },
})

export const getSelectedCategory = state => state.product.selectedCategory //value - 'PERFUME'
export const { filterCategory } = categoriesSlice.actions
export default categoriesSlice.reducer