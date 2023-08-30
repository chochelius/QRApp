import { Link } from 'react-router-dom';

function home() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">

                        <div className="card my-3" style={{ width: '18rem' }} >
                            <div className="card-body bg-dark  text-white text-center">
                                <h3 className="card-title fw-bold">Generador de códigos QR</h3>
                                <p className="card-text fs-5">Crea códigos QR a partir de texto</p>
                                <div className="d-grid gap-2">
                                    <Link to="/creator" className="btn btn-primary">Generar</Link>
                                </div>
                            </div>
                        </div>


                        <div className="card mt-5  text-white" style={{ width: '18rem' }} >
                            <div className="card-body bg-dark text-center" >
                                <h3 className="card-title fw-bold">Lector de códigos QR</h3>
                                <p className="card-text fs-5">Escanea códigos QR</p>
                                <div className="d-grid gap-2">
                                    <Link to="/reader" className="btn btn-primary ">Escanear</Link>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-dark">
                            <p className="text-center text-white mt-5">Creado por <a href="mailto:contacto@jclabs.click" className="text-white">JC Labs</a></p>
                        </div>



                    </div>
                </div>
            </div>

        </>
    )
}

export default home