import {Link} from "react-router-dom";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import * as CustomerService from "../service/customerService";
import React, {useEffect, useState} from "react";
import * as TypeCustomerService from "../service/typeCustomerService";


function CreateCustomer() {
    const navigate = useNavigate();

    const [types, setTypes] = useState([]);

    useEffect(() => {
        getTypes();
    }, [])

    const getTypes = async () => {
        setTypes(await TypeCustomerService.getAll());
        console.log(types)
    }

    const customerDefault = {
        name: "",
        gender: "Male",
        address: "",
        typeCustomer: null
    }
    const createCustomer = async (data) => {
        console.log(data.typeCustomer)
        data.typeCustomer = JSON.parse(data.typeCustomer);
        const res = await CustomerService.create(data);
        if (res.status === 201) {
            navigate("/customer");
            toast("Thêm mới thành công");
        } else {
            toast.error("Thêm mới thất bại")
        }
    }


    return (
        <Formik
            initialValues={customerDefault}
            onSubmit={(values) => {
                createCustomer(values);
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .required("Must not empty")
                    .matches(/([A-Z][a-z]+)+/, "The name must not contain numbers, and the initial letters of each word must be capitalized."),
                typeCustomer: Yup.string()
                    .required("Must not empty")
            })}
        >

            <div className="row" style={{margin: '5% auto 5% auto', width: '50%'}}>
                <Form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
                        <Field type="text" className="form-control" id="exampleInputEmail1" name="name"
                               aria-describedby="emailHelp"/>
                        <ErrorMessage name="name" component="span" style={{color: "red"}}></ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="select" className="form-label">Gender</label>
                        <Field as="select" className="form-select" aria-label="Default select example" id="select"
                               name="gender">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </Field>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="select1" className="form-label">Type</label>
                        <Field as="select" className="form-select" aria-label="Default select example" id="select1"
                               name="typeCustomer">
                            <option value={null} disabled selected={true}>Type</option>
                            {types.map((type, index) => (
                                <option key={index} value={JSON.stringify(type)}>{type.name}</option>
                            ))}

                        </Field>
                        <ErrorMessage name="typeCustomer" component="span" style={{color: "red"}}></ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                        <Field type="text" className="form-control" id="exampleInputPassword1" name="address"/>
                        <ErrorMessage name="address" component="span" style={{color: "red"}}></ErrorMessage>
                    </div>
                    <hr/>
                    <div className="d-grid gap-2 d-md-block">
                        <Link style={{marginLeft: '75%', marginRight: '1%'}} className="btn btn-danger" to="/customer"
                              role="button">Back</Link>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </Form>
            </div>
        </Formik>
    )
}

export default CreateCustomer;