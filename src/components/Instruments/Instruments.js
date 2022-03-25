import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Instrument from '../Instrument/Instrument';

const Instruments = () => {
    // instruments
    const [instruments, setInstruments] = useState([]);

    // fetch data from fake db
    useEffect(() => {
        fetch('instruments.json')
            .then(res => res.json())
            .then(data => setInstruments(data))
    }, [])

    return (
        <div className="row">
            <div className="col-10">
                <div className="products-container row row-cols-1 row-cols-md-3 g-4">
                    {
                        instruments.map(instrument => <Instrument
                            key={instrument.id}
                            instrument={instrument}
                        ></Instrument>)
                    }
                </div>
            </div>
            <div className="col-2 cart-container">
                {/* <Cart cart={cart}></Cart> */}
            </div>
        </div>
    );
};

export default Instruments;