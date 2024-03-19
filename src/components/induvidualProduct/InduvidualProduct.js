import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addToCart, totalCount} from "../shoppingCart/cartSlice";
import {HeaderText} from "../common/H1.styles";
import styles from "./induvidualProduct.module.css"
import {BaseButton} from "../common/button.styles";

const IndividualProduct = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const dispatch = useDispatch();

    let params = useParams();
    const productId = params.id
    console.log(productId)
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://v2.api.noroff.dev/online-shop/${productId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch product');
                }
                const jsonResponse = await response.json();
                setProduct(jsonResponse.data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchProduct();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className={styles.grid}>
            <div className={styles.container}>
            <HeaderText>{product.title}</HeaderText>
                <div className={styles.description}>
            <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                {product.discountedPrice === product.price ? <div></div> : <div><p>Discount: ${product.price - product.discountedPrice}</p>
                    <p>Discounted price: ${product.discountedPrice}</p></div>}
                </div>
                <BaseButton className={styles.center} onClick={() => dispatch(addToCart(product.id))}>Add to cart</BaseButton>

            </div>
            <div className={styles.containerTwo}>
                <img className={styles.individualProductImg} src={product.image.url} alt={product.title} />
            </div>
                {product.reviews.map(review => {
                    return (
                        <div className={styles.container} key={review.id}>
                            <h3>Reviews:</h3>
                            <p>Username: {review.username}</p>
                            <p>Rating: {review.rating}</p>
                            <p>{review.description}</p>
                        </div>
                    )
                })}

        </div>
    );
}

export default IndividualProduct;

