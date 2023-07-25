
import { ViewData } from "../Services/AjaxService";
import { ActionTypes } from "./ActionTypes";


let flg = true;
if (flg) {
    var Catlist = ViewData("Category");
    flg = false;
}


export const CategoryReduser = (state = Catlist, action: any) => {
    switch (action.type) {
        case ActionTypes.ADDCAT:
            return [...state, action.payload];
        case ActionTypes.VIEWCAT:

            return action.payload;

        case ActionTypes.UPDATECAT:

            return state;

        case ActionTypes.REMOVECAT:
            
        return state.filter( ( a ) => a.id !== action.payload );

        default:
            return state;
    }
};