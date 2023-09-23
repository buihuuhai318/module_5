import {Field, Form, Formik} from "formik";
import React from "react";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import * as bookService from "../service/bookService";

function CreateBook() {

    const navigate = useNavigate();
    const createBook = async (data) => {
        data.quantity = parseInt(data.quantity);
        const res = await bookService.create(data);
        if (res.status === 201) {
            navigate("/");
            toast("Thêm mới thành công");
        } else {
            toast.error("Thêm mới thất bại")
        }
    }

    const bookDefault = {
        title: "",
        quantity: ""
    }

    return (
        <>
            <Formik
                initialValues={bookDefault}
                onSubmit={(values) => {
                    createBook(values);
                }}
            >
                <div style={{width: '70%', marginLeft: 'auto', marginRight: 'auto', marginTop: '5%'}}>

                    <Form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                            <Field type="text" className="form-control" name="title" id="exampleInputEmail1"
                                   aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Quantity</label>
                            <Field type="number" className="form-control" name="quantity" id="exampleInputPassword1"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Save</button>
                    </Form>
                </div>
            </Formik>
        </>
    )
}

export default CreateBook;