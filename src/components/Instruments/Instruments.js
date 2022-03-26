import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Instrument from '../Instrument/Instrument';

const Instruments = () => {
    // instruments
    const [instruments, setInstruments] = useState([]);

    // fetch data from fake db
    useEffect(() => {
        fetch('instruments.json')
            .then(res => res.json())
            .then(data => setInstruments(data))
    }, []);

    // cart
    const [cart, setCart] = useState([]);

    // button event handle works
    const setEventHandle = selectedInstrument => {
        // check existance
        const exists = cart.find(instrument => instrument.id === selectedInstrument.id);
        if (exists) {
            alert('Already added in the cart');
        }
        else {
            const newCart = [...cart, selectedInstrument];
            setCart(newCart);
        }
    }

    // reset
    const resetCart = () => {
        setCart([]);
    }


    return (
        <div className="row mt-5 w-100">
            <div className="col-8">
                <div className="products-container row row-cols-1 row-cols-md-3 g-4">
                    {
                        instruments.map(instrument => <Instrument
                            key={instrument.id}
                            instrument={instrument}
                            setEventHandle={setEventHandle}
                        ></Instrument>)
                    }
                </div>
            </div>
            <div className="col-4 cart-container">
                <Cart cart={cart} resetCart={resetCart}></Cart>
            </div>
        </div >
    );
};

export default Instruments;