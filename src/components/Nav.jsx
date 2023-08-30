import { Link } from "react-router-dom";

function Nav() {
    return (
        <div className="position-absolute top-0 start-50 translate-middle-x my-4 bg-dark">
            <nav className="navbar navbar-expand navbar-dark bg-dark text-light">
                <div className="container-fluid">
                    <Link to={'/'} className="text-white">
                        <i className="bi bi-qr-code ms-2 me-3" style={{ fontSize: '50px' }}>
                        </i>
                    </Link>
                    <Link className="navbar-brand" to="/">
                        QR-App
                    </Link>
                    <Link className="nav-link ms-1 me-2" to="/creator">
                        Generador
                    </Link>
                    <p className="my-4">|</p>
                    <Link className="nav-link mx-2" to="/reader">
                        Lector
                    </Link>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
