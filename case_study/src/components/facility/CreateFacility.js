import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import * as FacilityService from "../../service/FacilityService";
import * as TypeFacilityService from "../../service/TypeFacilityService";

function CreateFacility() {

    const navigate = useNavigate();

    const [types, setTypes] = useState([]);

    const [initialTypeFacility, setInitialTypeFacility] = useState(null);


    const getTypes = async () => {
        setTypes(await TypeFacilityService.getAll());
    }

    useEffect(() => {
        getTypes();
    }, [initialTypeFacility])

    const createService = async (data) => {
        data.area = parseInt(data.area);
        data.rental = parseInt(data.rental);
        data.occupancy = parseInt(data.occupancy);
        data.typeFacility = JSON.parse(data.typeFacility);
        const res = await FacilityService.create(data);
        if (res.status === 201) {
            navigate("/facility");
            toast("Thêm mới thành công");
        } else {
            toast.error("Thêm mới thất bại")
        }
    }

    const serviceDefault = {
        title: "",
        area: "",
        rental: "",
        occupancy: "",
        type: "Day",
        img: "",
        typeFacility: {}
    }

    if (initialTypeFacility === null) {
        return (
            <InitType/>
        )
    } else {
        return (
            <Formik
                initialValues={serviceDefault}
                onSubmit={(values => {
                    createService(values);
                })}
                validationSchema={Yup.object({
                    title: Yup.string()
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
                        <FormCreate data={initialTypeFacility}/>
                        <br/>
                        <hr/>
                        <div className="d-grid gap-2 d-md-block">
                            <Link style={{marginLeft: '75%', marginRight: '1%'}} className="btn btn-danger"
                                  to="/service"
                                  role="button">Back</Link>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </Form>
                </div>
            </Formik>
        )
    }

    function changeType(e) {
        const selectedValue = e.target.value;
        setInitialTypeFacility(selectedValue);
    }

    function InitType() {
        return (
            <div className="row" style={{margin: '5% auto 5% auto', width: '50%'}}>
                <form action="">
                    <div className="mb-3">
                        <label htmlFor="select" className="form-label">Facility Type</label>
                        <select className="form-select" aria-label="Default select example" id="select"
                                name="typeFacility" value={initialTypeFacility}
                                onChange={changeType}>
                            {types.map((type, index) => (
                                <option key={index} value={JSON.stringify(type)}>{type.name}</option>
                            ))}
                        </select>
                    </div>
                </form>
            </div>
        )
    }

    function BaseFacility() {
        return (
            <>
                <div className="mb-3">
                    <label htmlFor="select" className="form-label">Facility Type</label>
                    <Field as="select" className="form-select" aria-label="Default select example" id="select"
                           name="typeFacility" value={initialTypeFacility}
                           onChange={changeType}>
                        {types.map((type, index) => (
                            <option key={index} value={JSON.stringify(type)}>{type.name}</option>
                        ))}
                    </Field>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Service's Name</label>
                    <Field type="text" className="form-control" id="exampleInputEmail1"
                           aria-describedby="emailHelp"
                           name="title"/>
                    <ErrorMessage name="title" component="span" style={{color: "red"}}></ErrorMessage>
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
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                    <Field type="text" className="form-control" id="exampleInputPassword1" name="description"/>
                    <ErrorMessage name="description" component="span" style={{color: "red"}}></ErrorMessage>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputGroupFile04" className="form-label">Image</label>
                    <Field type="text" className="form-control" name="img" id="inputGroupFile04"
                           aria-describedby="inputGroupFileAddon04" aria-label="Upload"/>
                </div>
            </>
        )
    }

    function Villa() {
        return (
            <>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Pool Area</label>
                    <Field type="text" className="form-control" id="exampleInputEmail1"
                           aria-describedby="emailHelp"
                           name="pool"/>
                    <ErrorMessage name="pool" component="span" style={{color: "red"}}></ErrorMessage>
                </div>
            </>
        )
    }

    function House() {
        return (
            <>
                <div className="mb-3">
                    <label htmlFor="select" className="form-label">Room Standard</label>
                    <Field as="select" className="form-select" aria-label="Default select example" id="select"
                           name="standard">
                        <option value="Standard Room">Standard Room</option>
                        <option value="Deluxe Room">Deluxe Room</option>
                        <option value="Suite">Suite</option>
                        <option value="Family Room">Family Room</option>
                    </Field>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Number Of Floors</label>
                    <Field type="text" className="form-control" id="exampleInputEmail1"
                           aria-describedby="emailHelp"
                           name="floors"/>
                    <ErrorMessage name="floors" component="span" style={{color: "red"}}></ErrorMessage>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Description Of Other Amenities</label>
                    <Field type="text" className="form-control" id="exampleInputEmail1"
                           aria-describedby="emailHelp"
                           name="amenities"/>
                    <ErrorMessage name="amenities" component="span" style={{color: "red"}}></ErrorMessage>
                </div>
            </>
        )
    }

    function Room() {
        return (
            <>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Complimentary Services</label>
                    <Field type="text" className="form-control" id="exampleInputEmail1"
                           aria-describedby="emailHelp"
                           name="complimentary"/>
                    <ErrorMessage name="complimentary" component="span" style={{color: "red"}}></ErrorMessage>
                </div>
            </>
        )
    }

    function FormCreate(props) {
        switch (JSON.parse(props.data).id) {
            case 1:
                return (
                    <>
                        <BaseFacility/>
                        <House/>
                        <Villa/>
                    </>
                )
            case 2:
                return (
                    <>
                        <BaseFacility/>
                        <House/>
                    </>
                )
            case 3:
                return (
                    <>
                        <BaseFacility/>
                        <Room/>
                    </>
                )
            default:
                return (
                    <>
                        <BaseFacility/>
                    </>
                )
        }
    }
}

export default CreateFacility;