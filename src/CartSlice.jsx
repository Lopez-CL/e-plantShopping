import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const existingPlant = state.items.find(plant => plant.name === action.payload.name)
      if(existingPlant){
        existingPlant.quantity+= 1;
      }else{
        state.items.push({...action.payload, quantity : 1})
      }
    },
    removeItem: (state, action) => {
      const updatedList = state.items.filter(plant=>(
        plant.name !== action.payload.name
      ))
      state.items = updatedList
    },
    updateQuantity: (state, action) => {
      const {name, quantity} = action.payload;
      const itemToUpdate = state.items.find(plant =>(
        plant.name === name
      ))
      if( itemToUpdate.quantity + quantity < 0){
      return
      }
      itemToUpdate.quantity = quantity;
  }}
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
