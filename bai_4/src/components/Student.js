import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min"
function Student(props) {
    const {data} = props
    return (
        <div style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto' , marginTop: '5%'}}>
            <header className="App-header">
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Address</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((student, index) => (
                        <tr key={index}>
                            <th scope="row">{student.id}</th>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.address}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </header>
        </div>
    );
}

export default Student;

export let student = [
    {
        id: 1,
        name: "hai",
        age: 20,
        address: "da nang"
    },
    {
        id: 2,
        name: "nguyen",
        age: 19,
        address: "quang binh"
    }
];