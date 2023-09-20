import "bootstrap/dist/css/bootstrap.css";

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg  sticky-top" style={{backgroundColor: 'aquamarine'}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">#Thehome</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown"
                            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Customer</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Contract</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="card text-bg-dark">
                <img src="https://i.imgur.com/TRKHgp5.jpg" className="card-img" style={{height: '100%'}} alt="..."/>
                    <div className="card-img-overlay"
                         style={{ textAlign: 'center', top: '300px', color: 'black', fontSize: '200%' }}>
                        <h1 className="card-title">#Thehome - Resort</h1>
                    </div>
            </div>
        </>
);
}

export default Header;
