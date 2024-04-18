import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import logo_black from '/assets/logo_black.png';
import fb_icon from '/assets/icons/fb_icon.png';
import insta_icon from '/assets/icons/insta_icon.png'

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
                    <img src={fb_icon} alt="" />
                    <img src={insta_icon} alt="" />

                </div>
            </div>
            <div className={styles.subscribe_form}>
            <p>Subscribe Now</p>
            <form>
                <label>
                    <input type="email" placeholder='Email' />
                </label>
            </form>
            <button>SEND</button>
            </div>
        </div>
    )
}
export default Footer;