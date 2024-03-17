import React, { createContext, useReducer, useContext } from 'react';

const StoreContext = createContext();

const initialState = {
  itemTypes: ['Furniture', 'Electronics', 'Toys', 'HomeGoods'], 
  itemList: {
    Furniture: ['Sofa', 'Chair', 'Beds', 'Benches'],
    Electronics: ['TV', 'Laptop', 'Smartphone', 'Headphones'],
    Toys: ['Action Figures', 'Board Games', 'Dolls', 'Building Blocks'],
    HomeGoods: ['Decor', 'Kitchen & Dining', 'Garden & Outdoor', 'Storage & Organization']
  }, 
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        itemList: {
          ...state.itemList,
          [action.payload.category]: [...state.itemList[action.payload.category], action.payload.item]
        }
      };
    case 'DELETE_ITEM':
      return {
        ...state,
        itemList: {
          ...state.itemList,
          [action.payload.category]: state.itemList[action.payload.category].filter(item => item !== action.payload.item)
        }
      };
    case 'EDIT_ITEM':
      // Implement logic to edit item
      return state;
    default:
      return state;
  }
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
