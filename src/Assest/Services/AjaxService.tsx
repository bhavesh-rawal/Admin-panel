import $ from "jquery";
// import { URL } from "./Config";
import Swal from "sweetalert2";


export const SaveData = (Obj: any, urll: string) => {
    var ab = '';
    $.ajax({
        url: `${urll}`,
        method: 'post',
        data: Obj,
        async: false,
        success: (obj: any) => {
            ab = obj;
            Swal.fire({
                icon: 'success',
                title: 'Added !',
                text: `Your Value`,
            })
        },
        error: (err: any) => {
            Swal.fire({
                icon: 'error',
                title: `Error...`,
                text: `Something went wrong! ${JSON.stringify( err)}`,
            })
        }
    });
    return ab;
};
export const deleteData = (obj: any, urll: string) => {
    let abb = -1;
    $.ajax({
        url: `${urll}/${obj}`,
        method: 'delete',
        success: (data: any) => {
            abb = data;
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
        },
        error: (err: any) => {
            Swal.fire({
                icon: 'error',
                title: `Error...`,
                text: `Something went wrong! ${err}`,
            })
        }
    });

    return abb;
};

export const ViewData = (urll: any) => {
    var List: any[] = [];
    $.ajax({
        url: `${urll}`,
        method: "get",
        async: false,
        success: function (abc: any) {
            List = abc;
        },
        error: (err: any) => {
            Swal.fire({
                icon: 'error',
                title: `Error...`,
                text: `Something went wrong! ${err}`,
            })
        }

    });
    return List;

};
