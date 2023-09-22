import React, {useState, useEffect} from "react";
import {Field, Form, Formik} from "formik";
import * as contentService from "../service/contentService"

function ToDoList() {

    const [list, setList] = useState([]);

    const contentDefault = {
        content: "",
        id: 0
    }

    const createContent = async (data) => {
        const res = await contentService.create(data);
        console.log(res.status)
        if(res.status === 201) {
            alert("Thêm mới thành công");
        } else {
            alert("Thêm mới thất bại")
        }
        setList(await contentService.getAll());
    }


    useEffect(() => {
        getToDoList();
    }, []);

    const getToDoList = async () => {
        setList(await contentService.getAll())
    }

    return (
        <>
            <Formik
                initialValues={contentDefault}
                onSubmit={(values) => {
                    createContent(values);
                }}
            >
                <div style={{width: '20%', marginLeft: 'auto', marginRight: 'auto', marginTop: '5%'}}>
                    <h1>Todo List</h1>
                    <div className="input-group mb-3">
                        <Form>
                            <Field type="text" className="form-control" placeholder="Enter a task" name="content"
                                   aria-label="Recipient's username"
                                   aria-describedby="button-addon2"/>
                            <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Add</button>
                        </Form>
                    </div>
                </div>
            </Formik>
            <div style={{width: '20%', marginLeft: 'auto', marginRight: 'auto', marginTop: '5%'}}>
                <ul>
                    {list.map((task, index) => (
                        <li key={index}>{task.content}</li>
                    ))}
                </ul>
            </div>
        </>
    )
        ;
}

export default ToDoList;