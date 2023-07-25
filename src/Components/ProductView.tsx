import React, { useState } from 'react';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from "react-redux";
import { AddCat, AddPro, RemovePro, View } from '../Assest/Redux/Action';


interface DataType {
    key: number;
    id: number;
    ProductName: string;
    Product_Img_URL: string;
    Category: string;
    Description: string;
    Price: number;
    Qty: number;
    Brand: number;

}


const defaultTitle = () => 'Products Table';

const CategoryView: React.FC = () => {

    const initialCategory = {
        id: null,
        ProductName: "",
        Product_Img_URL: "",
        Category: "",
        Description: "",
        Price: null,
        Qty: null,
        Brand: ""
    };

    const [hasData, setHasData] = useState(true);
    const [ellipsis, setEllipsis] = useState(false);
    const [show, setShow] = useState(false);
    const [Obj, setObj] = useState(initialCategory);




    const Prolist: any[] = useSelector((state: any) => state.ProductReduser);
    const CatList: any[] = useSelector((state: any) => state.CategoryReduser);


    const dispatch = useDispatch();





    const onChange: PaginationProps['onChange'] = (pageNumber) => {
        console.log('Page: ', pageNumber);
    };

    //Model Open Show
    function handleShow() {
        setShow(true);
    }

    //Model Close Show
    const handleClose = () => setShow(false);


    // Commen Save Data Fun...
    const abc = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setObj(obj => ({ ...Obj, [name]: value, Created: "Admin" }));
    };
    const Deleted = (ind: any) => {
        dispatch(RemovePro(ind.id, "Products"));
    };

    const columns: ColumnsType<DataType> = [
        {
            title: 'Id',
            dataIndex: 'id',
        },

        {
            title: 'Product Image',
            dataIndex: 'Product_Img_URL',
            render: (theImageURL) => (
                <Space size="middle">
                    <img style={{ width: "4rem", height: "4rem" }} alt={theImageURL} src={theImageURL} />
                </Space>
            )

        },
        {
            title: 'Product Name',
            dataIndex: 'ProductName',
        },
        {
            title: 'Category Name',
            dataIndex: 'Category',

        },
        {
            title: 'Product Description',
            dataIndex: 'Description',
            render: (desc) => (
                <Space size="middle">
                    <p style={{ width: "30rem" }}>{desc}</p>
                </Space>
            )

        },
        {
            title: 'Brand',
            dataIndex: 'Brand',
        },
        {
            title: 'Quantity',
            dataIndex: 'Qty',
        },
        {
            title: 'Action',
            key: 'action',
            // sorter: true,
            render: (ind) => (
                <Space size="middle">
                    <a onClick={() => { Deleted(ind); }}><DeleteOutlined /></a>
                    <a> <EditOutlined /> </a>
                </Space>
            ),
        },
    ];

    const tableColumns = columns.map((item) => ({ ...item, ellipsis }));


    const Stored = () => {
        dispatch(AddPro(Obj, "Products"));
    };

    return (
        <>
            <div className='w-100 p-5'>
                <div>
                    <Button className="me-2 mb-2" onClick={() => { handleShow(); }}>
                        + Add New Product
                    </Button>
                    <Modal size="lg" show={show} fullscreen={'lg-down'} onHide={() => setShow(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>
                                <div className="page-header">
                                    <div className="page-title">
                                        <h4> Add Products</h4>
                                        <h6>Create new product</h6>
                                    </div>
                                </div>
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                            <div className="card ">
                                <div className="card-body p-4 p-md-5">
                                    <form>

                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input type="text" onChange={abc} value={Obj.ProductName || ""} name="ProductName" placeholder="Product Name" className="form-control form-control-lg" />
                                                </div>

                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <select className="form-select" onChange={abc} value={Obj.Category || ""} name="Category" >
                                                        <option selected>--Select Category--</option>
                                                        {
                                                            CatList.map((ac: any) => (
                                                                <>
                                                                    <option value={ac.CategoryName}>{ac.CategoryName}</option>
                                                                </>
                                                            ))
                                                        }
                                                    </select>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input type="url" onChange={abc} value={Obj.Product_Img_URL || ""} name="Product_Img_URL" placeholder="Product Img URL" className="form-control form-control-lg" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input type="number" onChange={abc} value={Obj.Price || ""} name="Price" placeholder="Price" className="form-control form-control-lg" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input type="number" onChange={abc} value={Obj.Qty || ""} name="Qty" placeholder="Quantity" className="form-control form-control-lg" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input type="text" onChange={abc} value={Obj.Brand || ""} name="Brand" placeholder="Brand" className="form-control form-control-lg" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-2">
                                            <input className="btn btn-primary btn-lg" onClick={(e) => { handleClose(); Stored(); }} type="button" value="Submit" />
                                        </div>
                                    </form>
                                </div>
                            </div>


                        </Modal.Body>
                    </Modal>

                </div>
                <Table
                    bordered
                    pagination={{
                        pageSizeOptions: [5, 10, 25, 50, 100],
                        defaultPageSize: 5,
                        showSizeChanger: true,
                        position: ["bottomLeft"],
                        size: "default",
                    }}
                    size='middle'
                    title={defaultTitle}
                    showHeader
                    columns={tableColumns}
                    dataSource={hasData ? Prolist : []}
                />
            </div>
        </>
    );
};

export default CategoryView;