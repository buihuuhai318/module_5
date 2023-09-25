import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min"
import {Link, Route, Routes} from "react-router-dom";
import Facility from "../facility/Facility";
import Customer from "../customer/Customer";
import CreateFacility from "../facility/CreateFacility";
import React from "react";
import CreateCustomer from "../customer/CreateCustomer";
import Contract from "../contract/Contract";
import CreateContract from "../contract/CreateContract";
import EditFacility from "../facility/EditFacility";
import EditCustomer from "../customer/EditCustomer";

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg  sticky-top" style={{backgroundColor: 'aquamarine'}}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/service">#Thehome</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown"
                            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/facility">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/customer">Customer</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contract">Contract</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="card text-bg-dark">
                <img src="https://i.imgur.com/TRKHgp5.jpg" className="card-img" style={{height: '100%'}} alt="..."/>
                <div className="card-img-overlay"
                     style={{textAlign: 'center', top: '300px', color: 'black', fontSize: '200%'}}>
                    <h1 className="card-title">#Thehome - Resort</h1>
                </div>
            </div>
            <Routes>
                <Route path="/facility" exact element={<Facility/>}/>
                <Route path="/customer" element={<Customer/>}/>
                <Route path="/contract" element={<Contract/>}/>
                <Route path="/createFacility" element={<CreateFacility/>}/>
                <Route path="/createCustomer" element={<CreateCustomer/>}/>
                <Route path="/createContract" element={<CreateContract/>}/>
                <Route path="/facility/edit/:id" element={<EditFacility/>}/>
                <Route path="/customer/edit/:id" element={<EditCustomer/>}/>
            </Routes>
        </>
    );
}

export default Header;
