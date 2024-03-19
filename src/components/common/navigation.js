import './navigation.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from "./CartIcon";
import styles from './navigation.module.css'

const Navigation = () => {


    return (
        <nav className={styles.navbar}>
            <ul >
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <li className={styles.cartIcon}><Link to="/cart"><CartIcon/></Link></li>
        </nav>
    );
}

export default Navigation;
