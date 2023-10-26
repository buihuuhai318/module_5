import {Route, Routes} from "react-router-dom";
import Vegetable from "./Vegetable";
import EditVegetable from "./EditVegetable";
import React from "react";
import CreateVegetable from "./CreateVegetable";

function Header() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Vegetable/>}/>
                <Route path="/create" element={<CreateVegetable/>}/>
                <Route path="/edit/:id" element={<EditVegetable/>}/>
            </Routes>
        </>
    )
}

export default Header;