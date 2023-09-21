import {Link} from "react-router-dom";
import React from "react";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

function CreateService() {
    const navigate = useNavigate();
    return (
        <Formik
            initialValues={{
                name: "",
                area: "",
                rental: "",
                occupancy: "",
                type: "Day"
            }}
            onSubmit={(values => {
                console.log(values);
                navigate("/service")
                toast("Create Successfully");
            })}
            validationSchema={Yup.object({
                name: Yup.string()
                    .required("Must not empty")
                    .matches(/([A-Z][a-z]+)/, "The name must not contain numbers, and the initial letters of each word must be capitalized."),
                area: Yup.number()
                    .required("Must not empty"),
                rental: Yup.number()
                    .required("Must not empty"),
                occupancy: Yup.number()
                    .required("Must not empty")
            })}
        >


            <div className="row" style={{margin: '5% auto 5% auto', width: '50%'}}>
                <Form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Service's Name</label>
                        <Field type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                               name="name"/>
                        <ErrorMessage name="name" component="span" style={{color: "red"}}></ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Usable Area</label>
                        <Field type="number" className="form-control" id="exampleInputPassword1" name="area"/>
                        <ErrorMessage name="area" component="span" style={{color: "red"}}></ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Rental Fee</label>
                        <Field type="number" className="form-control" id="exampleInputPassword1" name="rental"/>
                        <ErrorMessage name="rental" component="span" style={{color: "red"}}></ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Maximum Occupancy</label>
                        <Field type="number" className="form-control" id="exampleInputPassword1" name="occupancy"/>
                        <ErrorMessage name="occupancy" component="span" style={{color: "red"}}></ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="select" className="form-label">Lease Type</label>
                        <Field as="select" className="form-select" aria-label="Default select example" id="select"
                               name="type">
                            <option value="Day">Day</option>
                            <option value="Month">Month</option>
                        </Field>
                    </div>
                    <hr/>
                    <div className="d-grid gap-2 d-md-block">
                        <Link style={{marginLeft: '75%', marginRight: '1%'}} className="btn btn-danger" to="/service"
                              role="button">Back</Link>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </Form>
            </div>
        </Formik>
    )
}

export default CreateService;