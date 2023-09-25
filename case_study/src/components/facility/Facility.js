import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Link, useNavigate} from "react-router-dom";
import * as FacilityService from "../../service/FacilityService";
import {toast} from "react-toastify";



function Facility() {

    const navigate = useNavigate();

    const [list, setList] = useState([]);

    const [show, setShow] = useState(false);

    const [myModal, setMyModal] = useState({});

    const handleClose = () => {
        setShow(false);
        setMyModal({});
    }
    const handleShow = (object) => {
        setShow(true);
        setMyModal(object);
        console.log(object);
    }

    const getServices = async () => {
        setList(await FacilityService.getAll());
    }

    useEffect(() => {
        getServices();
    }, [])

    const deleteService = async (data) => {
        const res = await FacilityService.del(data);
        setList(await FacilityService.getAll());
        if (res.status === 200) {
            navigate("/facility");
            toast("Xoá thành công");
            handleClose();
        } else {
            toast.error("Xoá thất bại")
        }
    }


    return (
        <>
            <div className="row" style={{margin: '5% 12% 5% 12%'}}>
                <div style={{width: '4%', position: 'fixed', right: '80px', top: '90vh', zIndex: '9999'}}>
                    <Link to="/createFacility" type="button" className="btn btn-outline-success"
                       style={{borderRadius: '30%'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                             className="bi bi-plus" viewBox="0 0 16 16">
                            <path
                                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg>
                    </Link>
                </div>
            </div>

            <div className="row" style={{margin: '5% 12% 5% 12%', display: 'flex'}}>
                {list.map((service, index) => (
                    <div className="col-xl-4 col-sm-6 col-12" style={{display: 'flex', marginBottom: '3%'}} key={index}>
                        <div className="card" style={{width: '23rem'}}>
                            <img src={service.img} className="card-img-top" style={{height: '13rem'}} alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{service.title}</h5>
                                <p className="card-text">{service.description}</p>
                                <div className="text-end">
                                    <Link href="#" className="btn btn-primary" style={{marginRight: '1%'}} to={`/facility/edit/${service.id}`}>Edit</Link>
                                    <Button variant="danger" onClick={() => handleShow(service, service.id)}>
                                        Delete
                                    </Button>
                                    <Modal show={show} onHide={handleClose}>
                                        <MyModal action={handleClose} data={myModal}/>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <nav aria-label="Page navigation example">
                    <ul className="pagination" style={{marginLeft: '40%'}}>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        {/* eslint-disable-next-line no-script-url */}
                        <li className="page-item"><a className="page-link" href="javascript:void(0)">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );

    function MyModal(props) {
        return (
            <>
                <Modal.Header closeButton>
                    <Modal.Title>{props.data.id}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure to delete {props.data.title}!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.action}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={() => deleteService(props.data)}>
                        Delete
                    </Button>
                </Modal.Footer>
            </>
        )
    }
}



export default Facility;
