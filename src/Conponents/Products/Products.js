import React from 'react';
import {Link} from "react-router-dom"

const Products = (props) => {
    const {pd , handleAddProduct} = props
    const {pdName , _id , price} = pd
    return (
        <div style={{border:"1px solid gray"}}>

            <h1>
                <Link to={`/productDetails/${_id}`} >
                Product Name : {pdName}
                </Link>
            </h1>

            <h3>Product Price :  {price}</h3>
            <button onClick={()=>handleAddProduct(pd)}>Buy Product</button>
        </div>
    );
};

export default Products;