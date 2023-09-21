import {Link} from "react-router-dom";
import React from "react";
import {contractList} from "../../data/DataContract";

function Contract() {

    const data = contractList;

    return (
        <>
            <div className="row" style={{margin: '5% 12% 5% 12%'}}>
                <div style={{width: '4%', position: 'fixed', right: '80px', top: '90vh', zIndex: '9999'}}>
                    <Link to="/createContract" type="button" className="btn btn-outline-success"
                          style={{borderRadius: '30%'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                             className="bi bi-plus" viewBox="0 0 16 16">
                            <path
                                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg>
                    </Link>
                </div>
            </div>
            <div className="row" style={{margin: '5% 12% 5% 12%', display: 'flex'}}>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Contract Number</th>
                        <th scope="col">Date In</th>
                        <th scope="col">Date Out</th>
                        <th scope="col">Deposit Amount</th>
                        <th scope="col">Total Payment Amount</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((contract, index) => (
                        <tr key={index}>
                            <td>{contract.contractNumber}</td>
                            <td>{contract.startDate}</td>
                            <td>{contract.endDate}</td>
                            <td>{contract.depositAmount}</td>
                            <td>{contract.totalPaymentAmount}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <nav aria-label="Page navigation example">
                    <ul className="pagination" style={{marginLeft: '37%'}}>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Contract;