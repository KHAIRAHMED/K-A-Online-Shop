import React, { useContext } from 'react';
import { contextApi } from '../../App';
const ProductReview = () => {
    const contexx = useContext(contextApi)

    console.log(contexx);
    return (
        <div>
            <h1>Review Onder</h1>
        </div>
    );
};

export default ProductReview;