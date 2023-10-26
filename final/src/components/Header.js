import {Route, Routes} from "react-router-dom";
import Books from "./Books";
import CreateBook from "./CreateBook";


function Header() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Books/>}/>
                <Route path="/create" element={<CreateBook/>}/>
            </Routes>
        </>
    )
}

export default Header;