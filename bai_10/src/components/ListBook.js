import {useEffect, useState} from "react";
import * as bookService from "../service/bookService";
import {Link, useNavigate} from "react-router-dom";
import {Button, Modal} from "react-bootstrap";
import {toast} from "react-toastify";

function ListBook() {

    const navigate = useNavigate();

    const [list, setList] = useState([]);

    const [show, setShow] = useState(false);

    const [myModal, setMyModal] = useState({});

    const handleClose = () => {
        setShow(false);
        setMyModal({});
    }
    const handleShow = (object) => {
        setShow(true);
        setMyModal(object);
        console.log(object);
    }

    useEffect(() => {
        getBooks();
    }, [])

    const getBooks = async () => {
        setList(await bookService.getAll());
    }

    const deleteBook = async (data) => {
        console.log(data)
        const res = await bookService.del(data);
        console.log(res.status)
        // if (res.status === 200) {
        //     navigate("/");
        //     toast("Chỉnh sửa thành công");
        //     handleClose();
        // } else {
        //     toast.error("Chỉnh sửa thất bại")
        // }
    }

    return (
        <>
            <div style={{width: '70%', marginLeft: 'auto', marginRight: 'auto', marginTop: '5%'}}>
                <h1>Library</h1>
                <Link className="btn btn-success" to="/add">Create</Link>
                <br/>
                <hr/>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {list.map((book) => (
                        <tr key={book.id}>
                            <td>{book.title}</td>
                            <td>{book.quantity}</td>
                            <td>
                                <Link style={{marginLeft: '1%', marginRight: '1%'}} type="button" className="btn btn-primary" to={`/edit/${book.id}`}>Edit</Link>
                                <Button variant="danger" onClick={() => handleShow(book)}>
                                    Delete
                                </Button>
                                <Modal show={show} onHide={handleClose}>
                                    <MyModal action={handleClose} data={myModal}/>
                                </Modal>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    )

    function MyModal(props) {
        return (
            <>
                <Modal.Header closeButton>
                    <Modal.Title>Delete {props.data.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure to delete {props.data.title}!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.action}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={}>
                        Delete
                    </Button>
                </Modal.Footer>
            </>
        )
    }
}

export default ListBook;