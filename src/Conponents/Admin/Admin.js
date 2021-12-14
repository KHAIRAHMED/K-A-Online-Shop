import React from 'react';
import {Link ,Outlet} from "react-router-dom"
import"./Admin.css"

const Admin = () => {
    return (
        <div className="admin-section">
            <div className="admin-left-side">
                <Link style={{color:"white"}} to="addProduct">Add Product</Link> <br /> <br />
                <Link style={{color:"white"}} to="manageOrder">Manage Order</Link> <br /> <br />v
                <Link style={{color:"white"}} to="editProduct">Edit Product</Link> <br /> <br />v
            </div>
            <div className="admin-right-side">
            <Outlet />
            </div>
        </div>
    );
};

export default Admin;