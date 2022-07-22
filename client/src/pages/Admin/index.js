import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import "./style.css";

import Orders from "./Orders";
import Products from "./Products";
import NewProduct from "./NewProduct";
import ProductDetail from "./ProductDetail";


function Admin() {

  return (
    <div>
        <nav>
            <ul className='admin-menu'>
                <li>
                    <Link to="/admin">Home</Link>
                </li>
                <li>
                    <Link to="/admin/orders">Orders</Link>
                </li>
                <li>
                    <Link to="/admin/products">Products</Link>
                </li>
                <li>
                    <Link to="/admin/products/new">New Product</Link>
                </li>
            </ul>
        </nav>

        <Box mt={12}>
          
            <Routes>
              <Route path="/orders" element={<Orders/>} />
              <Route path="/products" element={<Products/>} />
              <Route path="/products/new" element={<NewProduct />} />
              <Route path="/products/:product_id" element={<ProductDetail/>} />
            </Routes>
          
        </Box>
    </div>
  )
}

export default Admin