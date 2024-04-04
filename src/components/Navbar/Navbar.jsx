import { Link } from "react-router-dom";
import styles from './Navbar.module.css'
import logo_black from '../../assets/logo_black.png'
import heart from '../../assets/icons/heart.png'
import cart from '../../assets/icons/cart.png'


function Navbar() {
    return (
        <div className={styles.navbar}>
            <ul className={styles.nav_menu}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/shop">Shop</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/about">About us</Link>
                </li>
                <li>
                    <Link to="/contact">Contact us</Link>
                </li>
            </ul>
            <div className={styles.nav_logo}>
            <img src={logo_black} alt="" />
            </div>
            <div className={styles.nav_right}>
                <Link to="/login">
                    <img src={heart} alt="" className={styles.nav_wishlist}/>
                </Link>
                <img src={cart} className={styles.nav_cart} onClick={cart} alt="" />
            </div>
        </div>
    );
}
export default Navbar;
