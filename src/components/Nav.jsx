import { Link } from "react-router-dom";

function Nav() {
    return (
        <div className="position-absolute top-0 start-50 translate-middle-x mx-auto mb-2">
            <nav className="navbar navbar-expand navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        QR-App
                    </Link>

                    <Link className="nav-link mx-2" to="/creator">
                        Generador
                    </Link>
                    <Link className="nav-link mx-2" to="/reader">
                        Lector
                    </Link>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
