
import { SaveData, ViewData, deleteData } from "../Services/AjaxService";
import { ActionTypes } from "./ActionTypes";

export const AddCat = (Obj: any, url: string) => {

    const loded = SaveData(Obj, url)

    return {
        type: ActionTypes.ADDCAT,
        payload: loded,
    };
};


export const AddPro = (Obj: any, url: string) => {
    const loded = SaveData(Obj, url)


    return {
        type: ActionTypes.ADDPRO,
        payload: loded,

    };
};

export const View = (url: string) => {
    const dta = ViewData(url)
    console.log(dta);

    return {
        type: ActionTypes.VIEWCAT,
        payload: dta
    };
};

export const Update = (id: number) => {
    return {
        type: ActionTypes.UPDATECAT,
        payload: id
    };
};

export const RemoveCat = (id: number, url: string) => {

    const ab = deleteData(id, url)
   
    return {
        type: ActionTypes.REMOVECAT,
        payload: id,
    };
};

export const RemovePro = (id: number, url: string) => {

    deleteData(id, url)
    return {
        type: ActionTypes.REMOVEPRO,
        payload: id,
    };
};







