import './App.css';
import ListBook from "./components/ListBook";
import {Route, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import CreateBook from "./components/CreateBook";
import EditBook from "./components/EditBook";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<ListBook/>}></Route>
                <Route path="/add" element={<CreateBook/>}></Route>
                <Route path="/edit/:id" element={<EditBook/>}></Route>
            </Routes>
            <ToastContainer></ToastContainer>
        </>
    );
}

export default App;
