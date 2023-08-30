import QRCode from "react-qr-code";
import { useState } from "react";

const Creator = () => {
    const [text, setText] = useState("https://itconsultants.odoo.com/");

    return (
        <div className="mt-2" style={{ width: "100vw" }}>
            <div className="container">
                <div className="row ">
                    <div className="col-12" >
                        <div className="card bg-dark text-white border-black ">
                            <div className="card-body ">
                                <div style={{ width: "98%", margin: "0", alignContent: "center", justifyContent: "center", textAlign: "center" }}>
                            <p className="text-center text-white fs-2 ">Generador de QR</p>
                                    <label
                                        htmlFor="exampleFormControlTextarea1"
                                        className="form-label text-white fs-6"
                                        style={{ width: "98%", maxWidth: "50vh", margin: "0" }}
                                    >
                                        <p className="text-center" style={{ width: "100%", margin: "0" }}>
                                            Escribe lo que quieres convertir
                                            a código QR
                                        </p>
                                    </label>
                                    <textarea
                                        className="form-control mt-2 bg-dark text-white text-center"
                                        id="exampleFormControlTextarea1"
                                        rows="2"
                                        value={text}
                                        onChange={(e) => setText(e.target.value)}
                                        style={{ width: "100%", maxWidth: "50vh", margin: "auto" }}
                                    ></textarea>
                                    <div className="mx-auto mt-1" style={{ width: "95%" }}>
                                        <QRCode value={text}
                                            style={{ margin: "10", padding: "auto" }}

                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Creator;