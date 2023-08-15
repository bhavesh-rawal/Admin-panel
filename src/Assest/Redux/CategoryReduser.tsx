
import { ViewData } from "../Services/AjaxService";
import { Category } from "../Services/Config";
import { ActionTypes } from "./ActionTypes";


let flg = true;
if (flg) {
    var Catlist = ViewData(Category);
    console.log(Catlist);
    
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