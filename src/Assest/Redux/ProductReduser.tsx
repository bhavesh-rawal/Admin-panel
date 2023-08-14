
import { ViewData } from "../Services/AjaxService";
import { Products } from "../Services/Config";
import { ActionTypes } from "./ActionTypes";



let flg = true;
if (flg) {
    var Prolist = ViewData(Products);
    flg = false;
}


export const ProductReduser = (state = Prolist, action: any) => {


    switch (action.type) {
        case ActionTypes.ADDPRO:
            return [...state, action.payload];

        case ActionTypes.VIEWPRO:

            return state;
        case ActionTypes.UPDATEPRO:

            return state;
        case ActionTypes.REMOVEPRO:

            return state.filter((a) => a.id !== action.payload);

        default:
            return state;
    }
};