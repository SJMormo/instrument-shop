import React from 'react';
import SelectedInstruments from '../SelectedInstruments/SelectedInstruments';

const Cart = ({ cart }) => {
    // console.log(cart);
    return (
        <div className="cart mt-5 pt-5">

            <h3>Selected Instruments</h3>
            {
                cart.map(items => <SelectedInstruments key={items.id} cartItems={items}></SelectedInstruments>)
            }
        </div>
    );
};

export default Cart;