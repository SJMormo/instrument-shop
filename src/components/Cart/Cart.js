import React from 'react';
import { useState } from 'react';
import SelectedInstruments from '../SelectedInstruments/SelectedInstruments';

const Cart = ({ cart }) => {

    // choose one for me
    let showOnUI;
    const [choose, setChoose] = useState('Click Again Please');
    console.log(cart);

    const getRandomNumber = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        const random = Math.floor(Math.random() * (max - min + 1) + min);
        // console.log();
        setChoose(cart[random].name);
    }

    return (
        <div className="cart mt-5 pt-5">

            <h3>Selected Instruments</h3>
            {
                cart.map(items => <SelectedInstruments key={items.id} cartItems={items}></SelectedInstruments>)
            }

            <button onClick={() => getRandomNumber(0, cart.length)} className="btn modify-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Choose One For me</button>

            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Your selected instrument</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <h4>{choose}</h4>
                </div>
            </div>
        </div >
    );
};

export default Cart;