import React, { useState } from 'react';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from "react-redux";
import { AddCat, RemoveCat, View } from '../Assest/Redux/Action';
import { Category } from '../Assest/Services/Config';


interface DataType {
    key: number;
    id: number;
    CategoryName: string;
    Category_Img_URL: string;
    CategoryCode: string;
    Description: string;

}



const defaultTitle = () => 'Category Table';

const CategoryView: React.FC = () => {

    const initialCategory = {
        id: null,
        CategoryName: "",
        CategoryCode: null,
        Category_Img_URL: "",
        Description: ""
    };

    const [hasData, setHasData] = useState(true);
    const [ellipsis, setEllipsis] = useState(false);
    const [show, setShow] = useState(false);
    const [Obj, setObj] = useState(initialCategory);

    const Catlist = useSelector((state: any) => state.CategoryReduser);


    const dispatch = useDispatch();

    const Deleted = (ind: any) => {
        dispatch(RemoveCat(ind.id, Category));
    };
    const columns: ColumnsType<DataType> = [
        {
            title: 'Id',
            dataIndex: 'id',
        },

        {
            title: 'Category Image',
            dataIndex: 'Category_Img_URL',
            render: (theImageURL) => (
                <Space size="middle">
                    <img style={{ width: "5rem", height: "4rem" }} alt={theImageURL} src={theImageURL} />
                </Space>
            )

        },
        {
            title: 'Category Name',
            dataIndex: 'CategoryName',
        },
        {
            title: 'Category Code',
            dataIndex: 'CategoryCode',

        },
        {
            title: 'Description',
            dataIndex: 'Description',
        },
        {
            title: 'Action',
            key: 'action',
            // sorter: true,
            render: (ind) => (
                <Space size="middle">
                    <a onClick={() => { Deleted(ind); }}><DeleteOutlined /></a>
                    <a>  <EditOutlined /> </a>
                </Space>
            ),
        },
    ];





    const tableColumns = columns.map((item) => ({ ...item, ellipsis }));



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
        setObj(obj => ({ ...Obj, [name]: value }));
    };

    const Stored = () => {
        dispatch(AddCat(Obj, "Category"));
    };



    return (
        <>
            <div className='w-100 p-5'>
                <div>
                    <Button className="me-2 mb-2" onClick={() => { handleShow() }}>
                        + Add New Category
                    </Button>
                    <Modal size="lg" show={show} fullscreen={'lg-down'} onHide={() => setShow(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>
                                <div className="page-header">
                                    <div className="page-title">
                                        <h4> Add Category</h4>
                                        <h6>Create new Category</h6>
                                    </div>
                                </div>
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="card ">
                                <div className="card-body p-4 p-md-5">
                                    <form>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-outline">
                                                    <input type="text" name="CategoryName" value={Obj.CategoryName || ""} onChange={abc} placeholder="Category Name" className="form-control form-control-lg" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input type="text" name="CategoryCode" value={Obj.CategoryCode || ""} onChange={abc} placeholder="Category Code" className="form-control form-control-lg" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input type="url" onChange={abc} name="Category_Img_URL" value={Obj.Category_Img_URL || ""} placeholder="Product Img URL" className="form-control form-control-lg" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-outline">
                                                <textarea name="Description" value={Obj.Description || ""} onChange={abc} className="col-md-12 mb-4" placeholder="Description"></textarea>
                                            </div>
                                        </div>

                                        <div className="pt-2" >
                                            <input className="btn btn-primary btn-lg" type="button" onClick={() => { handleClose(); Stored() }} value="Submit" />
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
                    dataSource={hasData ? Catlist : []}
                />
            </div>
        </>
    );
};

export default CategoryView;