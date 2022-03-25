import React from 'react';

const SelectedInstruments = (props) => {
    const { name, image } = props.cartItems
    return (
        <div>
            <p>{name}</p>
        </div>
    );
};

export default SelectedInstruments;