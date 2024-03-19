import React from 'react';
import Navigation from "./navigation";
import Photo from '../../images/pexels-karolina-grabowska-5650049.jpg'
import './headerImg.module.css'
import styles from './headerImg.module.css';






const Header = () => {
    return (
        <header>
            <div className={styles.imageContainer}>
                <img className={styles.headerImg} src={Photo} alt="Header"/>
                <div className={styles.textOverlay}>Noroff Online Shop</div>
            </div>
            <Navigation />

        </header>
    );
};

export default Header;