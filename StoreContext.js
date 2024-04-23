import React, { createContext, useReducer, useContext } from 'react';

const StoreContext = createContext();

function updateObjectById(array, id, update) {
  const index = array.findIndex(obj => obj.id === id);

  if (index !== -1) {
    array[index] = { ...array[index], ...update };
    return true; 
  }
  return false;
}

const initialState = {
  itemTypes: [
    { key: 'furniture', name: 'Furnitures' },
    { key: 'decor', name: 'Decor' },
    { key: 'kitchen', name: 'Kitchen & Dining' },
    { key: 'garden', name: 'Garden & Outdoor' }
  ],
  itemList: {
    furniture: [
      {
        id: 1,
        name: "Sofa",
        description: "Comfortable seating for your living room",
        price: "499.99"
      },
      {
        id: 2,
        name: "Chair",
        description: "Accent chairs to complement your decor",
        price: "149.99"
      },
      {
        id: 3,
        name: "Beds",
        description: "Various sizes of beds for a good night's sleep",
        price: "699.99"
      },
      {
        id: 4,
        name: "Benches",
        description: "Stylish benches for your entryway or dining area",
        price: "199.99"
      }
    ],
    decor: [
      {
        id: 1,
        name: "Wall Art",
        description: "Canvas prints and framed art for your walls",
        price: "29.99"
      },
      {
        id: 2,
        name: "Vases",
        description: "Beautiful vases to display flowers or as standalone decor",
        price: "39.99"
      },
      {
        id: 3,
        name: "Candles",
        description: "Scented candles to create a cozy ambiance",
        price: "19.99"
      },
      {
        id: 4,
        name: "Mirrors",
        description: "Decorative mirrors to enhance your space",
        price: "79.99"
      }
    ],
    kitchen: [
      {
        id: 1,
        name: "Cookware",
        description: "Pots, pans, and cooking utensils for your kitchen",
        price: "59.99"
      },
      {
        id: 2,
        name: "Dinnerware",
        description: "Plates, bowls, and cutlery for serving meals",
        price: "39.99"
      },
      {
        id: 3,
        name: "Glassware",
        description: "Wine glasses, tumblers, and mugs for beverages",
        price: "24.99"
      },
      {
        id: 4,
        name: "Kitchen Appliances",
        description: "Blenders, toasters, and coffee makers for convenience",
        price: "129.99"
      }
    ],
    garden: [
      {
        id: 1,
        name: "Patio Furniture",
        description: "Tables, chairs, and umbrellas for outdoor dining",
        price: "299.99"
      },
      {
        id: 2,
        name: "Grills",
        description: "Barbecue grills for outdoor cooking",
        price: "199.99"
      },
      {
        id: 3,
        name: "Gardening Tools",
        description: "Shovels, rakes, and watering cans for gardening",
        price: "34.99"
      },
      {
        id: 4,
        name: "Outdoor Decor",
        description: "Statues, fountains, and garden ornaments",
        price: "49.99"
      }
    ]
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