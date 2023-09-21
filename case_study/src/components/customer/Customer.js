import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min"
import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import {customerList} from "../../data/DataCustomer";

function Customer() {

    const data = customerList;

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
                    <Link to="/createCustomer" type="button" className="btn btn-outline-success"
                          style={{borderRadius: '30%'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                             className="bi bi-plus" viewBox="0 0 16 16">
                            <path
                                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg>
                    </Link>
                </div>
            </div>
            <div className="row" style={{margin: '5% 5% 5% 5%', display: 'flex'}}>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Day Of Birth</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Id Card</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Type</th>
                        {/*<th scope="col">Address</th>*/}
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((customer, index) => (
                        <tr>
                            <th scope="row">{index}</th>
                            <td>{customer.name}</td>
                            <td>{customer.birthday}</td>
                            <td>{customer.gender}</td>
                            <td>{customer.idCard}</td>
                            <td>{customer.phone}</td>
                            <td>{customer.email}</td>
                            <td>{customer.type}</td>
                            {/*<td>{customer.address}</td>*/}
                            <td>
                                <button type="button" className="btn btn-warning" style={{marginRight: '1%'}}>Edit
                                </button>
                                <Button variant="danger" onClick={() => handleShow(customer)}>
                                    Delete
                                </Button>
                                <Modal show={show} onHide={handleClose}>
                                    <MyModal action={handleClose} data={myModal}/>
                                </Modal>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <nav aria-label="Page navigation example">
                    <ul className="pagination" style={{marginLeft: '37%'}}>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
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
    )
}

function MyModal(props) {
    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>{props.data.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure to delete {props.data.name}!</Modal.Body>
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

export default Customer;