import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Link, Route, Routes} from "react-router-dom";
import Customer from "../customer/Customer";
import {customerList} from "../../data/DataCustomer";
import CreateService from "./CreateService";


function Service(props) {

    const {data} = props;

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


    return (
        <>
            <div className="row" style={{margin: '5% 12% 5% 12%'}}>
                <div style={{width: '4%', position: 'fixed', right: '80px', top: '90vh', zIndex: '9999'}}>
                    <Link to="/createService" type="button" className="btn btn-outline-success"
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
                {data.map((service, index) => (
                    <div className="col-xl-4 col-sm-6 col-12" style={{display: 'flex', marginBottom: '3%'}} key={index}>
                        <div className="card" style={{width: '23rem'}}>
                            <img src={service.img} className="card-img-top" style={{height: '13rem'}} alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{service.title}</h5>
                                <p className="card-text">{service.description}</p>
                                <div className="text-end">
                                    <a href="#" className="btn btn-primary" style={{marginRight: '1%'}}>View</a>
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
                    <ul className="pagination" style={{marginLeft: '37%'}}>
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
            <Routes>
                {/*<Route path="/createService" element={<CreateService />} />*/}
            </Routes>
        </>
    );
}

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
                <Button variant="danger" onClick={props.action}>
                    Delete
                </Button>
            </Modal.Footer>
        </>
    )
}

export default Service;
