import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';


const ManageOrder = () => {
    const [products, setProducts] = useState([]);
    const [editProduct , setEditProduct] = useState({})
    // const [updateProData, setUpdateProData] = useState({
    //     pdName: "k-a-online-shop",
    //     price: 6875
    // })
    // Modal 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {
        axios.get("http://localhost:5600/products")
            .then(res => {
                setProducts(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    // delete product 
    const handleDelete = (id) => {
        axios.delete(`http://localhost:5600/delete/${id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }


    // update product 
    const handleEdit = (pd) => {
        setEditProduct(pd)
        handleShow()
    }
    const handleOnChange =(e)=>{
            const updateProduct = {...editProduct}
            updateProduct[e.target.name] = e.target.value;
            setEditProduct(updateProduct)
    }
    const handleUpdatePro = () => {
        handleClose()
        axios.patch(`http://localhost:5600/product-update/${editProduct?._id}`, editProduct)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <table>
                <tr>
                    <th>Product Name</th>
                    <th>Weight</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>

                {
                    products?.map(product => <tr>
                        <td>{product.pdName}</td>
                        <td>{product.Weight}</td>
                        <td>{product.price}</td>
                        <td>
                            <button onClick={() => handleDelete(product._id)}>DELETE</button>
                            <button onClick={() => handleEdit(product)}>EDIT</button>
                        </td>
                    </tr>
                    )
                }

            </table>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <input type="text" name="pdName" placeholder="Update Product Name" defaultValue={editProduct.pdName} onBlur={handleOnChange}/> <br /> <br />

                        <input type="number" name="Weight" defaultValue={editProduct.Weight} onBlur={handleOnChange} placeholder="Update Product weight" /> <br /> <br />
                        <input type="text" name="price" defaultValue={editProduct.price} onBlur={handleOnChange} placeholder="Update Product Price" /> <br />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdatePro}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ManageOrder;