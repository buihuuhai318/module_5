import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min"
import './App.css';
import {ToastContainer} from "react-toastify";
import Header from "./component/Header";
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <>
            <ToastContainer></ToastContainer>
            <Header/>
        </>
    );
}

export default App;
