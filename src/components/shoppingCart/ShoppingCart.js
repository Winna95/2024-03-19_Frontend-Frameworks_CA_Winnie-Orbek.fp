import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "./cartSlice";
import { Link } from "react-router-dom";
import { BaseButton } from "../common/button.styles";
import styles from "./shoppingCart.module.css";
import { HeaderText } from "../common/H1.styles";

const ShoppingCart = () => {
    const [products, setProducts] = useState([]);

    const dispatch = useDispatch();
    const cart = useSelector((state) => Array.from(state.cart.value.entries()));
    const totalQuantity = cart.reduce((total, item) => total + item[1], 0);
    const totalPrice = cart.reduce((total, item) => {
        const product = products.find(product => product.id === item[0]);
        return total + (product ? product.price * item[1] : 0);
    }, 0);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://v2.api.noroff.dev/online-shop');
                const jsonResponse = await response.json();
                setProducts(jsonResponse.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    function productIdToProduct(productId) {
        return products.find(product => product.id === productId);
    }

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
    };

    if (cart.length === 0) {
        return (
            <div>
                <HeaderText>Shopping Cart</HeaderText>
                <div className={styles.grid}>
                    <div className={styles.container}>
                        <p className={styles.center}>Shopping cart is empty - Try add some products to your cart.</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <HeaderText>Shopping Cart</HeaderText>
            <div className={styles.grid}>
                <div className={styles.container}>
                    {cart.map(item => {
                        const product = productIdToProduct(item[0]);
                        if (!product) return null;
                        return (
                            <div key={product.id}>
                                <div>
                                    <li><b>{product.title}</b>
                                        - ${product.price}
                                        <div className={styles.rightAligned}>
                                            &nbsp;qty: {item[1]}
                                            <button className={styles.removeBtn} onClick={() => handleRemoveFromCart(product.id)}>Remove</button>
                                        </div></li>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className={styles.containerTwo}>
                    <b>Order Summary</b>
                    <div className={styles.flex}><p>Delivery: </p>
                        <p>FREE</p>
                    </div>
                    <div className={styles.flex}>
                        <p>Total Quantity: </p>
                        <p>{totalQuantity}</p>
                    </div>
                    <div className={styles.flex}><p>Total: </p>
                        <p>${totalPrice.toFixed(2)}</p></div>
                    <Link to="/checkout-success"><BaseButton>Checkout</BaseButton></Link>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;