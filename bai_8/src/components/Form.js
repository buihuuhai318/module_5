import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min"
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";

function FormHealth() {

    return (
        <Formik
            initialValues={{
                name: "",
                idCard: "",
                birth: "",
                gender: "",
                country: "",
                company: "",
                position: "",
                city: "",
                district: "",
                wards: "",
                street: "",
                email: "",
                phone: "",
                insurance: "no",
                symptoms: [],
                travel: "",
                contact: []
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .required("not empty"),
                idCard: Yup.string()
                    .required("not empty"),
                birth: Yup.number()
                    .min(1900, "more than 1990")
                    .required("not empty"),
                country: Yup.string()
                    .required("not empty"),
                city: Yup.string()
                    .required("not empty"),
                district: Yup.string()
                    .required("not empty"),
                wards: Yup.string()
                    .required("not empty"),
                street: Yup.string()
                    .required("not empty"),
                phone: Yup.string()
                    .required("not empty"),
                email: Yup.string()
                    .required("not empty")
                    .matches(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/, "invalid email address")
            })}
            onSubmit={
                values => {
                    console.log(values);
                }
            }
        >
            <div style={{margin: "5% auto 0 auto", width: "50%"}}>
                <h1>Health Declaration Form</h1>
                <Form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                        <Field type="text" className="form-control" id="exampleInputEmail1" name="name"
                               aria-describedby="emailHelp"/>
                        <ErrorMessage name="name" component="span" style={{color: "red"}}></ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">ID Card</label>
                        <Field type="text" className="form-control" id="exampleInputEmail1" name="idCard"
                               aria-describedby="emailHelp"/>
                        <ErrorMessage name="name" component="span" style={{color: "red"}}></ErrorMessage>

                        {/*<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>*/}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Year Of Birth</label>
                        <Field type="text" className="form-control" id="exampleInputEmail1" name="birth"
                               aria-describedby="emailHelp"/>
                        <ErrorMessage name="name" component="span" style={{color: "red"}}></ErrorMessage>

                        {/*<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>*/}
                    </div>
                    <div className="mb-3">
                        <div className="form-check">
                            <Field className="form-check-input" type="radio" value="male" name="gender"
                                   id="flexRadioDefault1"/>
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Male
                            </label>
                        </div>
                        <div className="form-check">
                            <Field className="form-check-input" type="radio" value="female" name="gender"
                                   id="flexRadioDefault2"/>
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Female
                            </label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Country</label>
                        <Field type="text" className="form-control" id="exampleInputEmail1" name="country"
                               aria-describedby="emailHelp"/>
                        <ErrorMessage name="name" component="span" style={{color: "red"}}></ErrorMessage>

                        {/*<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>*/}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Company</label>
                        <Field type="text" className="form-control" id="exampleInputEmail1" name="company"
                               aria-describedby="emailHelp"/>
                        <ErrorMessage name="name" component="span" style={{color: "red"}}></ErrorMessage>

                        {/*<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>*/}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Position</label>
                        <Field type="text" className="form-control" id="exampleInputEmail1" name="position"
                               aria-describedby="emailHelp"/>
                        <ErrorMessage name="name" component="span" style={{color: "red"}}></ErrorMessage>

                        {/*<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>*/}
                    </div>
                    <div className="form-check">
                        <Field className="form-check-input" type="checkbox" value="yes" name="insurance"
                               id="flexCheckIndeterminate111"/>
                        <label className="form-check-label" htmlFor="flexCheckIndeterminate111">
                            Health Insurance
                        </label>
                    </div>
                    <br/>
                    <h1>Address</h1>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">City</label>
                        <Field type="text" className="form-control" id="exampleInputEmail1" name="city"
                               aria-describedby="emailHelp"/>
                        <ErrorMessage name="name" component="span" style={{color: "red"}}></ErrorMessage>

                        {/*<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>*/}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">District</label>
                        <Field type="text" className="form-control" id="exampleInputEmail1" name="district"
                               aria-describedby="emailHelp"/>
                        <ErrorMessage name="name" component="span" style={{color: "red"}}></ErrorMessage>

                        {/*<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>*/}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Wards</label>
                        <Field type="text" className="form-control" id="exampleInputEmail1" name="wards"
                               aria-describedby="emailHelp"/>
                        <ErrorMessage name="name" component="span" style={{color: "red"}}></ErrorMessage>

                        {/*<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>*/}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Street</label>
                        <Field type="text" className="form-control" id="exampleInputEmail1" name="street"
                               aria-describedby="emailHelp"/>
                        <ErrorMessage name="name" component="span" style={{color: "red"}}></ErrorMessage>
                        {/*<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>*/}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Phone" className="form-label">Phone</label>
                        <Field type="text" className="form-control" id="Phone" name="phone"
                               aria-describedby="emailHelp"/>
                        <ErrorMessage name="name" component="span" style={{color: "red"}}></ErrorMessage>
                        {/*<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>*/}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Email" className="form-label">Email</label>
                        <Field type="text" className="form-control" id="Email" name="email"
                               aria-describedby="emailHelp"/>
                        <ErrorMessage name="name" component="span" style={{color: "red"}}></ErrorMessage>
                        {/*<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>*/}
                    </div>
                    <br/>
                    <h1>Have you traveled to any foreign countries or territories in the past 14 days?</h1>
                    <div className="mb-3">
                        <Field type="text" className="form-control" id="exampleInputEmail1" name="travel"
                               aria-describedby="emailHelp"/>
                        {/*<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>*/}
                    </div>
                    <h1>In the past 14 days, have you experienced any of the following symptoms?</h1>
                    <div className="mb-3">
                        <div className="form-check">
                            <Field className="form-check-input" type="checkbox" value="fever" name="symptoms" id="flexCheckDefault66"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault66">
                                    Fever
                                </label>
                        </div>
                        <div className="form-check">
                            <Field className="form-check-input" type="checkbox" value="cough" name="symptoms" id="flexCheckChecked55"/>
                                <label className="form-check-label" htmlFor="flexCheckChecked55">
                                    Cough
                                </label>
                        </div>
                        <div className="form-check">
                            <Field className="form-check-input" type="checkbox" value="shortness of breath" name="symptoms" id="flexCheckChecked44"/>
                            <label className="form-check-label" htmlFor="flexCheckChecked44">
                                Shortness of breath
                            </label>
                        </div>
                        <div className="form-check">
                            <Field className="form-check-input" type="checkbox" value="pneumonia" name="symptoms" id="flexCheckChecked33"/>
                            <label className="form-check-label" htmlFor="flexCheckChecked33">
                                Pneumonia
                            </label>
                        </div>
                        <div className="form-check">
                            <Field className="form-check-input" type="checkbox" value="sore throat" name="symptoms" id="flexCheckChecked22"/>
                            <label className="form-check-label" htmlFor="flexCheckChecked22">
                                Sore throat
                            </label>
                        </div>
                        <div className="form-check">
                            <Field className="form-check-input" type="checkbox" value="fatigue" name="symptoms" id="flexCheckChecked11"/>
                            <label className="form-check-label" htmlFor="flexCheckChecked11">
                                Fatigue
                            </label>
                        </div>
                        <br/>
                        <h1>In the past 14 days, have you had contact with anyone?</h1>
                        <div className="form-check">
                            <Field className="form-check-input" type="checkbox" name="contact" value="People who are sick or suspected of having COVID-19" id="flexCheckChecked1"/>
                            <label className="form-check-label" htmlFor="flexCheckChecked1">
                                People who are sick or suspected of having COVID-19
                            </label>
                        </div>
                        <div className="form-check">
                            <Field className="form-check-input" type="checkbox" name="contact" value="People from countries with COVID-19 cases" id="flexCheckChecked2"/>
                            <label className="form-check-label" htmlFor="flexCheckChecked2">
                                People from countries with COVID-19 cases
                            </label>
                        </div>
                        <div className="form-check">
                            <Field className="form-check-input" type="checkbox" name="contact" value="People with symptoms of fever, cough, shortness of breath, pneumonia, sore throat, fatigue" id="flexCheckChecked3"/>
                            <label className="form-check-label" htmlFor="flexCheckChecked3">
                                People with symptoms of fever, cough, shortness of breath, pneumonia, sore throat, fatigue
                            </label>
                        </div>
                    </div>
                    <hr/>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </Form>
            </div>
        </Formik>
    );
}

export default FormHealth;