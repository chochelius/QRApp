import { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const Reader = () => {

    const [data, setData] = useState('');

    return (
        <div>
            <h1 className='text-center mt-5'>Lector QR </h1>
            <div className="container" style={{ width: '70vh' }}>
                <div className="row w-auto">
                    <div className="col-12 ">
                        <div className="card mt-1 ">
                            <div className="card-body">
                                <QrReader
                                    constraints={{ facingMode: 'environment' }}
                                    delay={300}
                                    style={{ width: '100%' }}
                                    onResult={(result, error) => {
                                        if (result) {
                                            setData(result?.text);
                                        }

                                        if (error) {
                                            console.info(error);
                                        }
                                    }}
                                />
                                <p className="card-text bg-primary text-white ps-1">Scanned Data: <br />- {data} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reader