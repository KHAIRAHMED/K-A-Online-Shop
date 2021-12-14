import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Conponents/Home/Home';
import { Route, Router, Routes } from 'react-router';
import Orders from './Conponents/Orders/Orders';
import Drafts from './Conponents/Drafts/Drafts';
import Login from './Conponents/Login/Login';
import Navbar from './Conponents/Navbar/Navbar';
import Admin from './Conponents/Admin/Admin';
import AddProduct from './Conponents/AddProduct/AddProduct';
import Footer from './Conponents/Footer/Footer';
import ProductDetails from './Conponents/ProductDetails/ProductDetails';
import ProductReview from './Conponents/ProductReview/ProductReview';
import { createContext, useState } from 'react';
import PrivateRoute from './Conponents/PrivateRoute/PrivateRoute';
import ManageOrder from './Conponents/ManageOrder/ManageOrder';
import EditProduct from './Conponents/EditProduct/EditProduct';


export const contextApi = createContext()
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState([])
  return (
    <contextApi.Provider value={[isLoggedIn, setIsLoggedIn]}>
      <Navbar />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={
          <PrivateRoute>
               <Orders />
          </PrivateRoute>
         } />
          <Route path="/admin/*" element={<Admin />}>
            <Route path="addProduct" element={<AddProduct />} />
            <Route path="manageOrder" element={<ManageOrder />} />
            <Route path="editProduct" element={<EditProduct />} />
          </Route>
          <Route path="/drafts" element={<Drafts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/review" element={<ProductReview />} />
          <Route path="/productDetails/:id" element={
            <PrivateRoute>
              <ProductDetails />
            </PrivateRoute>
          } />
          <Route path="/footer" element={<Footer />} />
          <Route path="*" element={<p>Invalid page</p>} />
        </Routes>
        <Footer />
      </div>
    </contextApi.Provider>
  );
}

export default App;
