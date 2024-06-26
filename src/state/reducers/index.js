import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import { categoryReducer } from "./categoryReducer";

export default combineReducers({
  cart: cartReducer,
  category: categoryReducer,
});
