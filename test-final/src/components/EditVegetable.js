import {Link, useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import * as TypesService from "../service/TypesService";
import * as VegetableService from "../service/VegetableService";
import {toast} from "react-toastify";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";

function EditVegetable() {

    const {id} = useParams();

    const navigate = useNavigate();

    const [vegetable, setVegetable] = useState(null);

    const [initType, setInitType] = useState(null)

    const [types, setTypes] = useState([]);

    useEffect(() => {
        getTypes();
        getVegetable();
    }, [])

    const getTypes = async () => {
        setTypes(await TypesService.getAll());
    }


    const getVegetable = async () => {
        let vegetableData = await VegetableService.findById(id);
        vegetableData = vegetableData.data;
        setVegetable(vegetableData);
        setInitType(JSON.stringify(vegetableData.type))
    }

    const saveVegetable = async (data) => {
        data.type = JSON.parse(initType);
        const res = await VegetableService.edit(data);
        if (res.status === 200) {
            navigate("/");
            toast("Chỉnh sửa thành công");
        } else {
            toast.error("Chỉnh sửa thất bại")
        }
    }


    return ( vegetable !== null &&
        <Formik
            initialValues={vegetable}
            onSubmit={(values) => {
                saveVegetable(values);
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .required("Must not empty"),
                code: Yup.string()
                    .required("Must not empty")
                    .matches(/^MHH-([A-Z]|[0-9]){4}$/, "Code invalid regex MHH-XXXX"),
                unit: Yup.string()
                    .required("Must not empty"),
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
                               name="type" value={initType} onChange={(e) => {
                            const selectedValue = e.target.value;
                            setInitType(selectedValue);
                        }}>
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

export default EditVegetable;