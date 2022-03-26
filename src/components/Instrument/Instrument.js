import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Instrument.css'

const Instrument = (props) => {
    const { name, price, img } = props.instrument;
    return (
        <div className="col">
            <div className="card h-100 shadow">
                <img src={img} className="card-img-top img-fluid modify-img" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>Price: {price}</p>
                </div>
                <div className="card-footer">
                    <div className="d-grid">
                        <button onClick={() => props.setEventHandle(props.instrument)} className="btn modify-btn" type="button">Add to Cart
                            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instrument;