import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min"
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";


function ContactForm() {

    return (
        <Formik
            initialValues={{
                name: "",
                email: "",
                phone: "",
                message: ""
            }}
            onSubmit={(
                values => {
                    console.log(values);
                }
            )}
            validationSchema={Yup.object({
                email: Yup.string()
                    .required("not empty")
                    .matches(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/, "invalid email address")
            })}
        >
            <div style={{margin: "5% auto 0 auto", width: "50%"}}>
            <Form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <Field type="text" className="form-control" id="exampleInputEmail1" name="name"
                           aria-describedby="emailHelp"/>
                    {/*<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>*/}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <Field type="text" className="form-control" id="exampleInputEmail1" name="email"
                           aria-describedby="emailHelp"/>
                    <ErrorMessage name="email" component="span" style={{color: "red"}}>
                        {/*<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>*/}
                    </ErrorMessage>

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
                    <Field type="text" className="form-control" id="exampleInputEmail1" name="phone"
                           aria-describedby="emailHelp"/>
                    {/*<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>*/}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Message</label>
                    <Field type="text" className="form-control" id="exampleInputEmail1" name="message"
                           aria-describedby="emailHelp"/>
                    {/*<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>*/}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </Form>
            </div>
        </Formik>
    );
}

export default ContactForm;