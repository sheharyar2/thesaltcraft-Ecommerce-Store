import styles from './Home.module.css';
import banner from '../../assets/pictures/other_images/banner.jpg'
import product_popular_img from '../../assets/pictures/other_images/popular_product.png'
import product_unique_img from '../../assets/pictures/other_images/unique_product.png'
import TrendingCollection from '../../components/trending_collection_banner/trending_collection_banner';
import { Link } from 'react-router-dom';
import Shopcategory from '../../components/shopcategory/Shopcategory';
function Home(){
    return(
        <div>
        <div className={styles.banner}>
            <img src={banner} alt="" />
        </div>
        <div className={styles.product_popular}>
            <div className={styles.product_popular_img}>
                <img src={product_popular_img} alt="" />
            </div>
            <div className={styles.product_popular_text}>
                <h1>Most Popular Laser Cutting Baskets</h1>
                <p>Transform your space with the breathtaking beauty of our Laser Cutting Basket Salt Lamps. 
                With their intricate laser-cut designs, these salt lamps make the perfect addition to any room in your home, office, or workplace.</p>
                <Link to="/shop">BUY NOW</Link>
            </div>
        </div>
        <div className={styles.product_popular}>
            <div className={styles.product_popular_text}>
                <h1>Unique Products By Handed Design</h1>
                <p>Unique Products By Handed Design Transform your space with these Hand Crafted salt lamps, a unique and stylish lighting solution that also offers a range of health benefits.</p>
                <Link to="/shop">Discover More</Link>
            </div>
            <div className={styles.product_popular_img}>
                <img src={product_unique_img} alt="" />
            </div>
        </div>
        <Shopcategory />
        <TrendingCollection/>
        </div>
       
    )
}
export default Home;