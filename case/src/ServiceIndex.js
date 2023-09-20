import "bootstrap/dist/css/bootstrap.css";

function ServiceIndex() {
    return (
        <>
            <div className="row" style={{margin: '5% 12% 5% 12%'}}>
                <div style={{width: '4%', position: 'fixed', right: '80px', top: '90vh', zIndex: '9999'}}>
                    <a href="createService.html" type="button" className="btn btn-outline-success"
                       style={{borderRadius: '30%'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                             className="bi bi-plus" viewBox="0 0 16 16">
                            <path
                                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg>
                    </a>
                </div>
            </div>

            <div className="row" style={{margin: '5% 12% 5% 12%', display: 'flex'}}>
                <div className="col-xl-4 col-sm-6 col-12" style={{display: 'flex', marginBottom: '3%'}}>
                    <div className="card" style={{width: '23rem'}}>
                        <img src="https://i.imgur.com/HuUb5GT.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up
                                the bulk of the
                                card's content.</p>
                            <div className="text-end">
                                <a href="#" className="btn btn-primary">View</a>
                                <button type="button" className="btn btn-danger" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal">
                                    Delete
                                </button>
                            </div>
                            <div className="modal fade" id="exampleModal" tabIndex="-1"
                                 aria-labelledby="exampleModalLabel"
                                 aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            ...
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary"
                                                    data-bs-dismiss="modal">Close
                                            </button>
                                            <button type="button" className="btn btn-danger">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
    );
}

export default ServiceIndex;
