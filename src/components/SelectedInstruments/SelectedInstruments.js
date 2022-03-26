import React from 'react';
import './selectedInstruments.css';

const SelectedInstruments = (props) => {
    const { name, img } = props.cartItems;
    return (
        <div className="selected-instruments mt-3 d-flex justify-content-center align-items-center">
            <img src={img} className="img-fluid" alt="" />
            <p className="ps-3">{name}</p>
        </div>
    );
};

export default SelectedInstruments;