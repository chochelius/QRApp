import { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const Reader = () => {

    const [data, setData] = useState('');


    return (
        <div className="mt-2 d-flex-md" style={{ width: "100vw" }}>
            <div className="card bg-dark text-white border-black ">
                <div className='row g-0 '>
                    <div className="col-sm-8 bg-dark align-self-center">
                        <div className="container">
                            <QrReader
                                constraints={{ facingMode: 'environment' }}
                                delay={300}

                                showViewFinder={true}
                                onResult={(result, error) => {
                                    if (result) {
                                        setData(result?.text);
                                    }

                                    if (error) {
                                        console.info(error);
                                    }
                                }}

                            />
                        </div>

                    </div>

                    <div className="col-sm-4 align-self-center">
                        <div className="card-body bg-dark">
                            <h3 className="card-title">Lector de QR</h3>
                            <p className="card-text h">
                                Escanea el código QR para ver la información que contiene
                            </p>
                            <p className="card-text bg-primary text-white ps-1">
                                <br />
                                {/* 
                                if (data) is a link then show a button to open it in a new tab
                                else show the data
                                 */}
                            </p>
                            {data?.includes('http' || 'https' || 'www' || '.com' || '.cl' || '.net' || '.org' || '.io' || '.dev' || '.edu' || '.gov') ? (<><p className="text-white">- {data}</p><a href={data} target="_blank" rel="noreferrer" className="btn btn-primary">Abrir enlace</a></>) : (<p className="text-white">{data}</p>)}


                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Reader;