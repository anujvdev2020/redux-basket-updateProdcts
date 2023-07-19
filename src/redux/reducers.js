import { combineReducers } from "redux";

const initialProductsState = {
  products: []
};

const productsReducer = (state = initialProductsState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const initialBasketState = {
  basketItems: []
};

const basketReducer = (state = initialBasketState, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      if (state.basketItems.length) {
        let flag = false;
        let arr = state.basketItems.map((item) => {
          if (item.id === action.payload.id) {
            flag = true;
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
        if (!flag) {
          return {
            ...state,
            basketItems: [...state.basketItems, action.payload]
          };
        } else {
          return {
            ...state,
            basketItems: arr
          };
        }
      } else {
        return {
          ...state,
          basketItems: [...state.basketItems, action.payload]
        };
      }

    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        basketItems: state.basketItems.filter(
          (item) => item.id !== action.payload
        )
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  products: productsReducer,
  basket: basketReducer
});

export default rootReducer;
