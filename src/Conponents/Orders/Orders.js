import axios from 'axios';
import React, { useContext, useEffect , useState } from 'react';
import { contextApi } from '../../App';

const Orders = () => {
    const [isLoggedIn] = useContext(contextApi)
    const [orders , setOrders] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5600/orders?email="+ isLoggedIn?.email,{
            headers:{
                "Authorization": `Bearer ${sessionStorage.getItem("token")}`
            }
        })
        .then(res =>{
            setOrders(res.data)
        })
        .catch(err=>{
            console.log(err);
        })

    },[isLoggedIn?.email])
    return (
        <div>
            {
                orders.map(order =><h1>{order.email }{ order.price}</h1>)
            }
        </div>
    );
};

export default Orders;