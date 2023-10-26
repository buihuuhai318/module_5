import {ErrorMessage, Field, Form, Formik} from "formik";
import {Link, useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import * as BookService from "../service/BookService"
import * as TypeService from "../service/TypeService"
import {toast} from "react-toastify";
import * as Yup from "yup";


function CreateBook() {

    const navigate = useNavigate()

    const [types, setTypes] = useState([]);

    useEffect(() => {
        getTypes();
    }, []);

    const getTypes = async () => {
        setTypes(await TypeService.getAll())
    }

    const bookDefault = {
        code: "",
        name: "",
        type: null,
        date: new Date(),
        quantity: 0,
    }

    const createBook = async (data) => {
        data.type = JSON.parse(data.type);
        let tempDate = data.date.split("-");
        console.log(tempDate)
        let day = tempDate[0];
        tempDate[0] = tempDate[2];
        tempDate[2] = day;
        data.date = tempDate.join("/");
        const res = await BookService.create(data);
        if (res.status) {
            navigate("/");
            toast("Create Successfully");
        } else {
            toast.error("Create Fail")
        }
    }
    
    return (
        <>
            <Formik initialValues={bookDefault}
                    onSubmit={(values) => createBook(values)}
                    validationSchema={Yup.object({
                        name: Yup.string()
                            .max(100, "Length max is 100"),
                        code: Yup.string()
                            .required("Must not empty")
                            .matches(/^BO-([0-9]){4}$/, "Code invalid regex BO-XXXX (X is number)"),
                        type: Yup.string()
                            .required("Must not empty"),
                        date: Yup.date()
                            .required("Must not empty")
                            .max(new Date(), "Must not than today"),
                        quantity: Yup.number()
                            .min(1, "Quantity must more than 0")
                    })}
            >
                <div className="row" style={{margin: '5% auto 5% auto', width: '50%'}}>
                    <Form>
                        <div className="mb-3">
                            <label htmlFor="exampleFieldEmail1" className="form-label">Code</label>
                            <Field type="text" className="form-control" id="exampleFieldEmail1" name="code"
                                   aria-describedby="emailHelp"/>
                            <ErrorMessage name="code" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFieldEmail1" className="form-label">Name</label>
                            <Field type="text" className="form-control" id="exampleFieldEmail1" name="name"
                                   aria-describedby="emailHelp"/>
                            <ErrorMessage name="name" component="span" style={{color: "red"}}></ErrorMessage>
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
                            <label htmlFor="exampleFieldPassword1" className="form-label">Date</label>
                            <Field type="date" className="form-control" id="exampleFieldPassword1" name="date"/>
                            <ErrorMessage name="date" component="span" style={{color: "red"}}></ErrorMessage>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFieldPassword1" className="form-label">Quantity</label>
                            <Field type="number" className="form-control" id="exampleFieldPassword1" name="quantity"/>
                            <ErrorMessage name="quantity" component="span" style={{color: "red"}}></ErrorMessage>
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
        </>
    )
}

export default CreateBook;