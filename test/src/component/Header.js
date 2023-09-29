import {Route, Routes} from "react-router-dom";
import Customer from "./Customer";
import EditCustomer from "./EditCustomer";
import React from "react";
import CreateCustomer from "./CreateCustomer";

function Header() {
    return (
        <>
            <Routes>
                <Route path="/customer" element={<Customer/>}/>
                <Route path="/createCustomer" element={<CreateCustomer/>}/>
                <Route path="/customer/edit/:id" element={<EditCustomer/>}/>
            </Routes>
        </>
    )
}

export default Header;