import {axios } from 'axios';
import React,{useState} from 'react';
import "../AddProduct/AddProduct.css"

const EditProduct = () => {
    const [addProduct, setAddProduct] = useState({})
    const [imageURL, setImageURL] = useState(null)
    // add product function 
    const handleAddProduct = (e) => {
        const newAddProduct = { ...addProduct }
        newAddProduct[e.target.name] = e.target.value
        setAddProduct(newAddProduct)
    }
    const handleAddPhoto = e => {
        const newPhoto = new FormData()
        newPhoto.set("key", "2a7bcf8b78ae13b52003de54a903e259")
        newPhoto.append("image", e.target.files[0])

        // post image imgbb 
        axios.post("https://api.imgbb.com/1/upload", newPhoto)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleAddProductForm = (e) => {
        const product = { ...addProduct }
        product.imageURL = imageURL


        // post product mongodb 
        axios.post("http://localhost:5600/addProduct", product)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err)
            })
        e.preventDefault()
    }

    return (
        <div className="addProduct">
            <form action="" className="from-control-section" onSubmit={handleAddProductForm}>
                <div className="from-control" >
                    <div>
                        <label htmlFor="">Add Product</label>
                        <p>
                            <input type="text" placeholder="Enter Name" name="pdName" required onBlur={handleAddProduct} />
                        </p>
                    </div>
                    <div>
                        <label htmlFor="">Weight (Dont Enter Negative Value)</label>
                        <p>
                            <input type="number" placeholder="Weight" name="Weight" onBlur={handleAddProduct} />
                        </p>
                    </div>
                    <div>
                        <label htmlFor="detailsProduct">Details Product</label>
                        <p>
                            <textarea name="details" id="detailsProduct" cols="30" rows="5" onBlur={handleAddProduct}></textarea>
                        </p>
                    </div>
                    <div>
                        <label htmlFor="priceProduct">Price: TK</label>
                        <p>
                            <input type="text" placeholder="Enter Price" id="priceProduct" name="price" onBlur={handleAddProduct} />
                        </p>
                    </div>
                    <div>
                        <label htmlFor="companyProduct">Price: TK</label>
                        <p>
                            <input type="text" placeholder="Enter Product Company Name" id="companyProduct" name="pdCompanyName" onBlur={handleAddProduct} />
                        </p>
                    </div>

                    <div>
                        <label htmlFor="photoProduct">Add Product</label>
                        <p>
                            <input type="file" onChange={handleAddPhoto} name="photo" id="photoProduct" />
                        </p>
                    </div>

                </div>
                <div className="save-product">
                    <input type="submit" value="Save" />
                </div>


            </form>
        </div>
    );
};

export default EditProduct;