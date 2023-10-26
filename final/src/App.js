import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min"
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header";
import {ToastContainer} from "react-toastify";
import React from "react";

function App() {
  return (
      <>
        <Header/>
        <ToastContainer></ToastContainer>
      </>
  );
}

export default App;
