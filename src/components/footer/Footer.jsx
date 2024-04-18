import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import logo_black from '/assets/logo_black.png';

function Footer(){
    return(
        <div className={styles.footer}>
            <div className={styles.footer_info}>
                <img src={logo_black} alt="" />
                <p>Islamabad,Pakistan</p>
                <p>Support@Thesaltcraft.com</p>
                <p>Phone: +923130157794</p>
            </div>
            <div className={styles.footer_pages}>
                <p>Pages</p>
                <ul>
                    <li>
                    <Link to="/">About Us</Link>
                    </li>
                    <li>
                    <Link to="/">FAQ's</Link>
                    </li>
                    <li>
                    <Link to="/">Privacy Policy</Link>
                    </li>
                    <li>
                    <Link to="/">Returns and Refunds</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.footer_social}>
                <p>Social Media Links</p>
                <div className={styles.social_icons}>

                </div>

            </div>
        </div>
    )
}
export default Footer;