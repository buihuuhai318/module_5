import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min"
import {useState} from "react";

function App() {

    const [count, setCount] = useState(0);

    const plusOne = () => {
        setCount(count + 1);
    }

    const plusTwo = () => {
        setCount(prevState => prevState + 1);
        setCount(prevState => prevState + 1);
    }

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>{count}</Form.Label>
            </Form.Group>


            <Button variant="primary" type="button" onClick={plusOne}>
                + 1
            </Button>
            <br/>
            <br/>
            <Button variant="primary" type="button" onClick={plusTwo}>
                + 2
            </Button>
        </Form>
    );
}

export default App;