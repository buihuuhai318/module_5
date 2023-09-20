import './App.css';
import React from "react";
import Student, {student} from "./components/Student";


function App() {
    return (
        <>
            <Student data={student} />
        </>
    );
}

export default App;
