import React from 'react';
import { TextField } from '@material-ui/core';
import "./style.css";
const Row = (props) => {
    const {
        productName, cost, link, onChange1,
        onChange3, onChange2,
    } = props;
    return (
        <div className="product-list">
            <div className="item">
            <p>Product Name </p>
            <TextField id="outlined-basic" value={productName} label="eg.:t-shirt" variant="outlined" onChange={onChange1} />
            </div>
            <div className="item">
            <p>Cost </p>
            <TextField id="outlined-basic" value={cost} label="eg.:₹500" variant="outlined" onChange={onChange2} />
            </div>
            <div className="item">
            <p>Product Link </p>
            <TextField id="outlined-basic" value={link} label="eg.:product.com" variant="outlined" onChange={onChange3} />
            </div>
        </div>
    );
};

export default Row;