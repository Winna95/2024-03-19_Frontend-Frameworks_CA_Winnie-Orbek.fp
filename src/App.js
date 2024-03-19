// App.js

import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Products from './components/products/products';
import ContactForm from "./components/contactForm/ContactForm";
import IndividualProduct from "./components/induvidualProduct/InduvidualProduct";
import Layout from "./components/common/Layout";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";
import CheckoutSuccess from "./components/checkoutSuccess/CheckoutSuccess";


const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Products />} />
                    <Route path="contact" element={<ContactForm />} />
                    <Route path="product/:id" element={<IndividualProduct />} />
                    <Route path="cart" element={<ShoppingCart/>} />
                    <Route path="checkout-success" element={<CheckoutSuccess />} />
                    <Route path="*" element={<div>Route not found</div>} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;

