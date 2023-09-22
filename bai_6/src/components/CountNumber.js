
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useCustom} from "../common/useCustom";

function CountNumber() {

    const amountPlus = 1;
    const initCount = 2;

    const [count, setCount] = useCustom(amountPlus, initCount);



    const plus = () => {
        setCount();
    }


    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>{count}</Form.Label>
            </Form.Group>


            <Button variant="primary" type="button" onClick={plus}>
                + 1
            </Button>
            <br/>
            <br/>
        </Form>
    );
}

export default CountNumber;