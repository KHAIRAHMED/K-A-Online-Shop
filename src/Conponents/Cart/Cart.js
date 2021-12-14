import axios from 'axios';
import React, { useContext } from 'react';
import { GiCarDoor } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { contextApi } from '../../App';


const Cart = (props) => {
    // console.log(props);
    const {cart , children} = props
    const {setProduct} = useContext(contextApi)
    setProduct(cart)




        // const clicked = ()=>{
        //     localStorage.setItem("addProduct", JSON.stringify(cart))
        // }
    return (
        <div>
            <h1>You are Selected : {cart.length}</h1>
            <Link to="/review">Review Order</Link>
        </div>
    );
};

export default Cart;