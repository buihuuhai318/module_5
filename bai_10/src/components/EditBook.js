import {Field, Form, Formik} from "formik";
import React, {useEffect, useState} from "react";
import {toast} from "react-toastify";
import {useNavigate, useParams} from "react-router-dom";
import * as bookService from "../service/bookService";

function EditBook() {

    const {id} = useParams();

    const [book, setBook] = useState( null);

    const navigate = useNavigate();

    const editBook = async (data) => {
        console.log(data)
        data.quantity = parseInt(data.quantity);
        const res = await bookService.edit(data);
        console.log(res.status)
        if (res.status === 200) {
            navigate("/");
            toast("Chỉnh sửa thành công");
        } else {
            toast.error("Chỉnh sửa thất bại")
        }
    }

    useEffect(() => {
        getBook();
    }, [id])

    const getBook = async () => {
        let bookTemp = await bookService.findById(id);
        bookTemp = bookTemp.data;
        setBook(bookTemp);
    }

    if (book !== null) {
        return (
            <>
                <Formik
                    initialValues={book}
                    onSubmit={(values) => {
                        editBook(values);
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


}

export default EditBook;