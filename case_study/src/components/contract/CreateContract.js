import {Link} from "react-router-dom";

function CreateContract() {
    return (
        <>
            <div className="row" style={{margin: '5% auto 5% auto', width: '50%'}}>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Contract ID</label>
                        <input type="text" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp"/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.
                            </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Date Begin</label>
                        <input type="date" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Date End</label>
                        <input type="date" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Tiền Cọc Trước</label>
                        <input type="text" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Tổng Số Tiền Cần Thanh
                            Toán</label>
                        <input type="text" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <hr/>
                        <div className="d-grid gap-2 d-md-block">
                            <Link style={{marginLeft: '75%', marginRight: '1%'}} className="btn btn-danger" to="/contract"
                               role="button">Back</Link>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                </form>
            </div>
        </>
    )
}

export default CreateContract;