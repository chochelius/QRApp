import { Link } from 'react-router-dom';

function home() {
    return (
        <>
            <div className="container m-auto">
                <div className="row">
                    <div className="col-12">
                        <div className="card mt-5">
                            <div className="card-body">
                                <h5 className="card-title">QR Code Generator</h5>
                                <p className="card-text">Generate QR Code</p>
                                <Link to="/creator" className="btn btn-primary">Generate</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card mt-1">
                            <div className="card-body">
                                <h5 className="card-title">QR Code Scanner</h5>
                                <p className="card-text">Scan QR Code</p>
                                <Link to="/reader" className="btn btn-primary">Scan</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default home