import React from 'react';
import { useState } from 'react';
import SelectedInstruments from '../SelectedInstruments/SelectedInstruments';
import './Cart.css';

const Cart = (props) => {
    // destructuring
    const { cart, resetCart } = props;

    // choose one for me
    const [choose, setChoose] = useState('Add Instruments to the cart first');

    const getRandomNumber = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        if (max === -1) {
            setChoose('Add Instruments to the cart first');
        }
        else {
            const random = Math.floor(Math.random() * (max - min + 1) + min);
            setChoose(cart[random].name);
        }
    }

    return (
        <div className="cart shadow">

            <h3 className="text-center pt-3">Selected Instruments</h3>
            {
                cart.map(items => <SelectedInstruments key={items.id} cartItems={items}></SelectedInstruments>)
            }

            <div className="d-flex justify-content-center">
                <button onClick={() => getRandomNumber(0, cart.length - 1)} className="btn modify-btn mt-5" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Choose One For me</button>
            </div>

            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Your selected instrument</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <h4>{choose}</h4>
                </div>
            </div>
            <div className="mt-3 d-flex justify-content-center pb-3">
                <button onClick={resetCart} className="btn modify-btn" type="button">Choose Again</button>
            </div>
        </div>
    );
};

export default Cart;