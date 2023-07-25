import { combineReducers } from "redux";
import { CategoryReduser } from "./CategoryReduser";
import { ProductReduser } from './ProductReduser';
export default combineReducers({
    CategoryReduser, ProductReduser
});