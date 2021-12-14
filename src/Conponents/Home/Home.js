import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import ProductDetails from '../ProductDetails/ProductDetails';
import Products from '../Products/Products';
// import Cart from './../Cart/Cart';

const Home = () => {
    const [products , setProducts] = useState([])
    // const [cart , setCart ] = useState([])
    // const [newCart , setNewCart] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:5600/products")
        .then(res => {
            // setProducts(res)
            setProducts(res.data)
        })
        .catch(res =>{
            console.log(res)
        })
    },[])
    console.log(products);


    // add product in cart 
    const handleAddProduct = (pd)=>{

    //    const _id = pd._id
    //    const sameProduct = cart.find(pd => pd._id === _id)
    //    let count = 1
    //    let newCart ;
    //    if(sameProduct){
    //        count = sameProduct.quantity + 1;
    //        sameProduct.quantity = count 

    //        const others = cart.filter(pdt => pdt._id !== _id)
    //        newCart=[...others , sameProduct]


    //    }
    //    else{
    //     pd.quantity = 1
    //     newCart=[...cart , pd]
    //    }
    //    setCart(newCart)



}




    return (
        // <div>
           <div>
           {
                products?.map(product => <Products key={product._id} pd={product} handleAddProduct={handleAddProduct} />)
            }
           </div>
           /* <div>
               <Cart cart={cart}> </Cart>
           </div> */
        // </div>
    );
};

export default Home;