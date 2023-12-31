import {Link} from "react-router-dom";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import * as CustomerService from "../../service/CustomerService";
import {useEffect, useState} from "react";
import * as TypeCustomerService from "../../service/TypeCustomerService";


function CreateCustomer() {
    const navigate = useNavigate();

    const [types, setTypes] = useState([]);

    useEffect(() => {
        getTypes();
    }, [])

    const getTypes = async () => {
        setTypes(await TypeCustomerService.getAll());
    }

    const customerDefault = {
        name: "",
        birthday: "",
        gender: "",
        idCard: "",
        phone: "",
        email: "",
        address: "",
        typeCustomer: ""
    }
    const createCustomer = async (data) => {
        let customerTemp = {
            ...data,
            typeCustomer: {
                id: data.typeCustomer
            }
        }
        console.log(customerTemp)
        const res = await CustomerService.create(customerTemp);
        if (res.status === 200) {
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
                    .matches(/([A-Z][a-z]+)/, "The name must not contain numbers, and the initial letters of each word must be capitalized."),
                phone: Yup.string()
                    .required("Must not empty")
                    .matches(/^(?:\+84|0)(90|91)\d{7}$/, "Phone number invalid"),
                idCard: Yup.string()
                    .required("Must not empty")
                    .matches(/^(\d{9})|(\d{12})$/, "ID Card invalid"),
                email: Yup.string()
                    .required("Must not empty")
                    .matches(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/, "Email invalid"),
                birthday: Yup.string()
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
                        {/*<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>*/}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Day Of Birth</label>
                        <Field type="date" className="form-control" id="exampleInputPassword1" name="birthday"/>
                        <ErrorMessage name="birthday" component="span" style={{color: "red"}}></ErrorMessage>
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
                        <label htmlFor="exampleInputPassword1" className="form-label">ID Card</label>
                        <Field type="text" className="form-control" id="exampleInputPassword1" name="idCard"/>
                        <ErrorMessage name="idCard" component="span" style={{color: "red"}}></ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
                        <Field type="text" className="form-control" id="exampleInputPassword1" name="phone"/>
                        <ErrorMessage name="phone" component="span" style={{color: "red"}}></ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                        <Field type="text" className="form-control" id="exampleInputPassword1" name="email"/>
                        <ErrorMessage name="email" component="span" style={{color: "red"}}></ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="select1" className="form-label">Type</label>
                        <Field as="select" className="form-select" aria-label="Default select example" id="select1"
                               name="typeCustomer">
                            {types.map((type, index) => (
                                <option key={index} value={type.id}>{type.name}</option>
                            ))}

                        </Field>
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