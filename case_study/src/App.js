import './App.css';
import Header from "./components/header/Header";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
    return (
        <>
            <Header/>
            <ToastContainer></ToastContainer>
        </>
    );
}

export default App;
