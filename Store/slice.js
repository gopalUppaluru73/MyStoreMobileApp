// Store/slice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  itemTypes: [
    { key: 'furniture', name: 'Furnitures' },
    { key: 'decor', name: 'Decor' },
    // Add more types as needed
  ],
  itemList: {
    furniture: [],
    decor: [],
    // Initialize other categories as needed
  },
};

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { categoryKey, item } = action.payload;
      state.itemList[categoryKey].push(item);
    },
    // Implement other reducers like deleteItem, editItem as needed
  },
});

export const { addItem } = itemsSlice.actions;

export default itemsSlice.reducer;
