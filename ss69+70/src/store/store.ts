import productReducer from "./reducers/productReducer";
import { combineReducers, createStore } from "redux";

const rootReducer= combineReducers({
    productReducer
})
// tạo kho
export const store= createStore(rootReducer);