import {Link} from "react-router-dom";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import * as VegetableService from "../service/VegetableService";
import React, {useEffect, useState} from "react";
import * as TypesService from "../service/TypesService";

function CreateVegetable() {
    const navigate = useNavigate();

    const [types, setTypes] = useState([]);

    useEffect(() => {
        getTypes();
    }, [])

    const getTypes = async () => {
        setTypes(await TypesService.getAll());
        console.log(types)
    }

    const VegetableDefault = {
        name: "",
        code: "",
        type: null,
        unit: null,
        price: 0,
        date: new Date()
    }

    const createVegetable = async (data) => {
        console.log(data.type)
        data.type = JSON.parse(data.type);
        const res = await VegetableService.create(data);
        if (res.status === 201) {
            navigate("/");
            toast("Thêm mới thành công");
        } else {
            toast.error("Thêm mới thất bại")
        }
    }


    return (
        <Formik
            initialValues={VegetableDefault}
            onSubmit={(values) => {
                createVegetable(values);
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .required("Must not empty"),
                code: Yup.string()
                    .required("Must not empty")
                    .matches(/^MHH-([A-Z]|[0-9]){4}$/, "Code invalid regex MHH-XXXX"),
                type: Yup.string()
                    .required("Must not empty"),
                unit: Yup.string()
                    .required("Must not empty"),
                date: Yup.date()
                    .required("Must not empty")
                    .min(new Date(), "Must be tomorrow"),
                price: Yup.number()
                    .min(1000, "Price must more than 1000 VND")
            })}
        >

            <div className="row" style={{margin: '5% auto 5% auto', width: '50%'}}>
                <Form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Code</label>
                        <Field type="text" className="form-control" id="exampleInputEmail1" name="code"
                               aria-describedby="emailHelp"/>
                        <ErrorMessage name="code" component="span" style={{color: "red"}}></ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                        <Field type="text" className="form-control" id="exampleInputEmail1" name="name"
                               aria-describedby="emailHelp"/>
                        <ErrorMessage name="name" component="span" style={{color: "red"}}></ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="select" className="form-label">Unit</label>
                        <Field as="select" className="form-select" aria-label="Default select example" id="select"
                               name="unit">
                            <option value={null} disabled selected>Unit</option>
                            <option value="Tui">Tui</option>
                            <option value="Bo">Bo</option>
                            <option value="Kg">Kg</option>
                        </Field>
                        <ErrorMessage name="unit" component="span" style={{color: "red"}}></ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
                        <Field type="number" className="form-control" id="exampleInputPassword1" name="price"/>
                        <ErrorMessage name="price" component="span" style={{color: "red"}}></ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="select1" className="form-label">Type</label>
                        <Field as="select" className="form-select" aria-label="Default select example" id="select1"
                               name="type">
                            <option value={null} disabled selected={true}>Type</option>
                            {types.map((type, index) => (
                                <option key={index} value={JSON.stringify(type)}>{type.name}</option>
                            ))}

                        </Field>
                        <ErrorMessage name="type" component="span" style={{color: "red"}}></ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Date</label>
                        <Field type="date" className="form-control" id="exampleInputPassword1" name="date"/>
                        <ErrorMessage name="date" component="span" style={{color: "red"}}></ErrorMessage>
                    </div>
                    <hr/>
                    <div className="d-grid gap-2 d-md-block">
                        <Link style={{marginLeft: '75%', marginRight: '1%'}} className="btn btn-danger" to="/"
                              role="button">Back</Link>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </Form>
            </div>
        </Formik>
    )
}

export default CreateVegetable;