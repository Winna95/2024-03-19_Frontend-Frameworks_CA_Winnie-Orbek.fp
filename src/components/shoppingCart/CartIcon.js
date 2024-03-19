import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {useSelector} from "react-redux";
import styles from "./CartIcon.module.css"

const CartIcon = () => {
    const itemCount = useSelector((state) => Array.from(state.cart.value.values())).reduce((partialSum, a) => partialSum + a, 0);

    return (
        <div className={styles.positionOfIcon}>
            <FontAwesomeIcon icon={faShoppingCart} size="2x" />
            {itemCount > 0 ? (
                <div className={styles.cartIcon}>
                    {itemCount}
                </div>
            ): null }
        </div>
    );
};

export default CartIcon;