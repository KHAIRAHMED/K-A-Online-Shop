import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { contextApi } from '../../App';
import "./ProductDetails.css"

const ProductDetails = () => {
    const [pdDetails, setPdDetails] = useState({})
    const { details, price, Weight, imageURL,pdCompanyName,pdName } = pdDetails
    const [isLoggedIn] = useContext(contextApi)
    const { id } = useParams()
    useEffect(() => {
        axios.get(`http://localhost:5600/productDetails/${id}`)
            .then(res => {
                setPdDetails(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [id])

    const habdleCheckOut = () => {
        // send selected product mongoDB 
        axios.post("http://localhost:5600/selectedData",{
            details,
            price,
            Weight,
            imageURL,
            pdCompanyName,
            pdName,
            email:isLoggedIn?.email
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    return (
        <div>
            <table>
                <tr>
                    <th>Descrition</th>
                    <th>weight</th>
                    <th>Price</th>
                </tr>
                <tr>
                    <td>{details}</td>
                    <td>{Weight}</td>
                    <td>{price}</td>
                </tr>
            </table>
            <button onClick={habdleCheckOut}>Proceed CheckOut</button>
        </div>
    );
};

export default ProductDetails;