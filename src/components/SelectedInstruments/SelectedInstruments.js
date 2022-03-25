import React from 'react';

const SelectedInstruments = (props) => {
    const { name } = props.cartItems;
    return (
        <div>
            <p>{name}</p>
        </div>
    );
};

export default SelectedInstruments;