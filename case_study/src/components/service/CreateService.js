import {Link} from "react-router-dom";
import React from "react";

function CreateService() {
    return (
        <div className="row" style={{margin: '5% auto 5% auto', width: '50%'}}>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Service's Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    {/*<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>*/}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Diện Tích Sử Dụng</label>
                    <input type="text" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Chi Phí Thuê</label>
                    <input type="text" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Số Lượng Người Tối Đa</label>
                    <input type="text" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="select" className="form-label">Kiểu Thuê</label>
                    <select className="form-select" aria-label="Default select example" id="select">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <hr/>
                    <div className="d-grid gap-2 d-md-block">
                        <Link style={{marginLeft: '75%', marginRight: '1%'}} className="btn btn-danger" to="/service" role="button" >Back</Link>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
            </form>
        </div>
)
}

export default CreateService;