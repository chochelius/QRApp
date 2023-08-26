import QRCode from "react-qr-code";
import { useState } from "react";

const Creator = () => {
    const [text, setText] = useState("https://itconsultants.odoo.com/");
    return (
        <div className="mt-5">


            <h1 className='text-center py-2 mt-5'>Generador de QR</h1>
            <div className="container" >
                <div className="row ">
                    <div className="col-12 ">
                        <div className="card ">
                            <div className="card-body">
                                <div className="mb-1">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label mb-1 ">Ingresa el texto</label>
                                    <textarea
                                        className="form-control mb-1"
                                        id="exampleFormControlTextarea1"
                                        rows="1"
                                        value={text}
                                        onChange={(e) => setText(e.target.value)}
                                    ></textarea>
                                </div>
                                {/* center this div */}
                                <div className="d-flex justify-content-center">
                                    <QRCode value={text} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Creator;