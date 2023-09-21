import {Link} from "react-router-dom";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

function CreateContract() {
    const navigate = useNavigate();
    return (
        <>
            <Formik
                initialValues={{
                    idContract: "",
                    dateIn: "",
                    dateOut: "",
                    deposit: 0,
                    total: 0,
                }}
                onSubmit={(values => {
                    console.log(values);
                    navigate("/contract")
                    toast("Create Successfully");
                })}
                validationSchema={Yup.object({
                    idContract: Yup.string()
                        .required("Must not empty"),
                    dateIn: Yup.string()
                        .required("Must not empty"),
                    dateOut: Yup.string()
                        .required("Must not empty"),
                    deposit: Yup.number()
                        .required("Must not empty")
                        .min(0, "Min is zero"),
                    total: Yup.number()
                        .required("Must not empty")
                        .min(0, "Min is zero")
                })}
            >


                <div className="row" style={{margin: '5% auto 5% auto', width: '50%'}}>
                    <Form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Contract ID</label>
                            <Field type="text" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp" name="idContract"/>
                            <ErrorMessage name="idContract" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Date Begin</label>
                            <Field type="date" className="form-control" id="exampleInputPassword1" name="dateIn"/>
                            <ErrorMessage name="dateIn" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Date End</label>
                            <Field type="date" className="form-control" id="exampleInputPassword1" name="dateOut"/>
                            <ErrorMessage name="dateOut" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Deposit Amount</label>
                            <Field type="number" className="form-control" id="exampleInputPassword1" name="deposit"/>
                            <ErrorMessage name="deposit" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Total Payment Amount</label>
                            <Field type="number" className="form-control" id="exampleInputPassword1" name="total"/>
                            <ErrorMessage name="total" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <hr/>
                        <div className="d-grid gap-2 d-md-block">
                            <Link style={{marginLeft: '75%', marginRight: '1%'}} className="btn btn-danger"
                                  to="/contract"
                                  role="button">Back</Link>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </Form>
                </div>
            </Formik>
        </>
    )
}

export default CreateContract;