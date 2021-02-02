// Store/Reducers/favoriteReducer.js

import UPDATE_JETONS from '../actions/jetonsActions'

const initialState = { jetons: 80 }

const jetonsReducer = (state = initialState, action) => {
  switch (action.type) {
      case "UPDATE_JETONS":
          return { 
              ...state, 
              jetons: action.payload 
          };
      default:
          return state;
  }
}
export default jetonsReducer