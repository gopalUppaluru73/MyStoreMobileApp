import React, { createContext, useReducer, useContext } from 'react';

const StoreContext = createContext();

function updateObjectById(array, id, update) {
  // Find the index of the object with the specified id
  const index = array.findIndex(obj => obj.id === id);

  // If the object with the specified id is found
  if (index !== -1) {
    // Update the object's properties
    array[index] = { ...array[index], ...update };
    return true; // Return true to indicate successful update
  }

  return false; // Return false if object with id is not found
}

const initialState = {
  itemTypes: [
    { key: 'furniture', name: 'Furnitures' },
    { key: 'electronics', name: 'Electronics' },
    { key: 'toys', name: 'Toys' },
    { key: 'homeGoods', name: 'Home Goods' }
  ],
  itemList: {
    furniture: [
      {id: 1, name: 'abcd', description: 'abcd des', price: 15}
    ],
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { category, item } = action.payload
      const categoryList = state.itemList[category.key] || []
       categoryList.push({ id: categoryList.length + 1, ...item })
      return {
        ...state,
        itemList: {
          ...state.itemList,
          [category.key]: categoryList
        }
      };
    }
    case 'DELETE_ITEM': {
      const { category, item } = action.payload
      const categoryList = state.itemList[category.key]
      return {
        ...state,
        itemList: {
          ...state.itemList,
          [category.key]: state.itemList[category.key].filter(listItem => listItem.id !== item.id)
        }
      };
    }
    case 'EDIT_ITEM': {
      const { category, item } = action.payload
      const categoryList = state.itemList[category.key]
      updateObjectById(categoryList, item.id, item)
      return {
        ...state,
        itemList: {
          ...state.itemList,
          [category.key]: [...categoryList]
        }
      };
    }

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