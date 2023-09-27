import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min"
import React, {useEffect, useState} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import * as CustomerService from "../../service/CustomerService";
import {toast} from "react-toastify";


function Customer() {

    const [list, setList] = useState([]);
    const [show, setShow] = useState(false);
    const [myModal, setMyModal] = useState({});
    const [currentPage, setCurrentPage] = useState(0);
    const [refresh, setRefresh] = useState(true);
    const [totalPages, setTotalPages] = useState(0);
    const [searchName, setSearchName] = useState("");
    const [records, setRecords] = useState("");
    const [limit, setLimit] = useState(5);

    const handleClose = () => {
        setShow(false);
        setMyModal({});
    }
    const handleShow = (object) => {
        setShow(true);
        setMyModal(object);
        // console.log(object);
    }

    useEffect(() => {
        getCustomers(currentPage, searchName);
    }, [refresh, searchName, limit])

    const getCustomers = async (page, search) => {
        const res = await CustomerService.getAll(page, limit, search);
        console.log(res)
        setList(res.content);
        setRecords(res.size);
        setTotalPages(res.totalPages);
        // console.log(res.totalPages);
        console.log(totalPages)
        // console.log(records)
        // console.log(currentPage)
        // setTotalPages(Math.ceil(records / limit));
    }

    const prePage = () => {
        setCurrentPage((currentPage) => currentPage - 1);
        setRefresh((refresh) => !refresh);
    }

    const nextPage = () => {
        setCurrentPage((currentPage) => currentPage + 1);
        setRefresh((refresh) => !refresh);
    }

    const handleSearch = () => {
        setCurrentPage(1);
        getCustomers(currentPage, searchName);
        setRefresh((refresh) => !refresh);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    }

    const deleteCustomer = async (data) => {
        const res = await CustomerService.del(data);
        if (res.status === 200) {
            await getCustomers(currentPage, searchName);
            toast("Xoá thành công");
            handleClose();
        } else {
            toast.error("Xoá thất bại");
        }
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
                <div className="row">
                    <div className="col-4">
                        <h1>List Customer</h1>
                    </div>
                    <div className="col-2">
                        <select className="form-select" aria-label="Default select example" onChange={(e) => {
                            const selectedValue = e.target.value;
                            setLimit(selectedValue);
                        }}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="5" selected>5</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                        </select>
                    </div>
                    <div className="col-6">
                        <div className="input-group mb-3" style={{width: "100%"}}>
                            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => handleSearch}>Search</button>
                            <input type="text" className="form-control"
                                   aria-label="Recipient's username" aria-describedby="button-addon2" onKeyDown={handleKeyDown}
                                   onChange={(e) => setSearchName(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <hr/>
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
                    {list.map((customer, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{customer.name}</td>
                            <td>{customer.birthday}</td>
                            <td>{customer.gender}</td>
                            <td>{customer.idCard}</td>
                            <td>{customer.phone}</td>
                            <td>{customer.email}</td>
                            <td>{customer.typeCustomer.name}</td>
                            {/*<td>{customer.address}</td>*/}
                            <td>
                                <Link to={`/customer/edit/${customer.id}`} className="btn btn-warning"
                                      style={{marginRight: '1%'}}>Edit
                                </Link>
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
                    <ul className="pagination" style={{marginLeft: '40%'}}>
                        <li className="page-item">
                            <button className="page-link" aria-label="Previous" onClick={() => prePage()} tabIndex={-1} disabled={currentPage + 1 <= 1}>
                                <span aria-hidden="true">&laquo;</span>
                            </button>
                        </li>
                        <li className="page-item"><button className="page-link" >{currentPage + 1}/{totalPages}</button></li>
                        {/*<li className="page-item"><button className="page-link" >2</button></li>*/}
                        {/*<li className="page-item"><button className="page-link" >3</button></li>*/}
                        <li className="page-item">
                            <button className="page-link" aria-label="Next" disabled={currentPage + 1 >= totalPages} onClick={() => nextPage()}>
                                <span aria-hidden="true">&raquo;</span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );

    function MyModal({data, action}) {
        return (
            <>
                <Modal.Header closeButton>
                    <Modal.Title>{data.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure to delete {data.name}!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={action}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={() => deleteCustomer(data)}>
                        Delete
                    </Button>
                </Modal.Footer>
            </>
        )
    }
}


export default Customer;