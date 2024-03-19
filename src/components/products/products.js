import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HeaderText } from './H1.styles';
import { ProductImg } from './ProductsImg.styles';
import styles from './products.module.css';
import { BaseButton } from './button.styles';
import {SearchInput} from "./SearchInput.styles";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://v2.api.noroff.dev/online-shop');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const jsonResponse = await response.json();
                setProducts(jsonResponse.data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        // Filter products based on the search term
        const filtered = products.filter(product =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
    }, [searchTerm, products]);

    const handleSearchInputChange = event => {
        setSearchTerm(event.target.value);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <HeaderText>Products:</HeaderText>
            <div className={styles.center}><SearchInput
                type="text"
                placeholder=" Search products..."
                value={searchTerm}
                onChange={handleSearchInputChange}
            /></div>

            <div className={styles.grid}>
                {filteredProducts.map(product => (
                    <div className={`${styles.container} ${styles.productCard}`} key={product.id}>
                        <div>
                            <div>
                                <ProductImg src={product.image.url} alt={product.title} />
                                <h3>{product.title}</h3>
                                <p>$ {product.discountedPrice ? product.discountedPrice : product.price}</p>
                                <Link to={{ pathname: `/product/${product.id}` }}>
                                    <BaseButton>View product</BaseButton>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;