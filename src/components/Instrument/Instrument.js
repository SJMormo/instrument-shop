import React from 'react';

const Instrument = (props) => {
    const { name, price, img } = props.instrument;
    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>Price: {price}</p>
                </div>
                <div className="card-footer">
                    {/* <div className="d-grid">
                        <button onClick={() => props.setEventHandle(props.product)} className="btn mormo-btn" type="button">Add to Cart
                            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Instrument;