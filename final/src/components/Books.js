import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import * as BookService from "../service/BookService"
import * as TypeService from "../service/TypeService";


function Books() {

    const [list, setList] = useState([])
    const [idType, setIdType] = useState("")
    const [types, setTypes] = useState([]);
    const [refresh, setRefresh] = useState(true);
    const [searchName, setSearchName] = useState("");

    const getTypes = async () => {
        setTypes(await TypeService.getAll())
    }


    useEffect(() => {
        getBooks(searchName, idType);
    }, [refresh, searchName, idType])

    useEffect(() => {
        getBooks(searchName, idType);
        getTypes();
    }, [])

    const getBooks = async (search, id) => {
        let res = await BookService.getAll(search, id);
        let resData = res.data;
        resData.sort((a, b) => a.quantity - b.quantity)
        setList(resData);
    }


    const handleSearch = () => {
        getBooks(searchName);
        setRefresh((refresh) => !refresh);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    }


    return (
        <>
            <div className="row" style={{
                margin:
                    '5% 5% 5% 5%', display: 'flex'
            }}>
                <div className="row">
                    <div className="row">
                        <div className="col-5">
                            <h1 style={{paddingBottom: "5%"}}>List Book</h1>
                        </div>
                        <div className="col-1">
                            <Link to="/create" type="button" className="btn btn-outline-primary">
                                Create</Link>
                        </div>
                        <div className="col-2">
                            <select className="form-select" aria-label="Default select example" onChange={
                                (e)=> {
                                    const selectedValue = e.target.value;
                                    setIdType(selectedValue);
                                    console.log(idType)
                                }}>
                                {types.map((type, index) => (
                                    <option key={index} value={type.id}>{type.name}</option>
                                ))}
                                <option value={""}>All</option>
                            </select>
                        </div>
                        <div className="col-4">
                            <div className="input-group mb-3" style={{
                                width:
                                    "100%"
                            }}>
                                <button className="btn btn-outline-secondary" type="button" id="button-addon2"
                                        onClick={() => handleSearch}>
                                    Search
                                </button>
                                <input type="text" className="form-control"
                                       aria-label="Recipient's username" aria-describedby="button-addon2"
                                       onKeyDown={handleKeyDown}
                                       onChange={(e) => setSearchName(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Code</th>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Date</th>
                        <th scope="col">Quantity</th>
                    </tr>
                    </thead>
                    <tbody>
                    {list.length !== 0  ? list.map((book, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{book.code}</td>
                            <td>{book.name}</td>
                            <td>{book.type.name}</td>
                            <td>{book.date}</td>
                            <td>{book.quantity}</td>
                        </tr>
                    )) : <tr>
                        <td colSpan="6" style={{textAlign: "center"}}>Data Empty</td>
                    </tr>
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Books;