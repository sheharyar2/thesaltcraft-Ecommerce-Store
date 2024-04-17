import styles from './trending_collection_banner.module.css'
import trending_banner from '/assets/pictures/other_images/trending_banner.png'
import { Link } from 'react-router-dom';

function TrendingCollection(){
    return(
        <div className={styles.trendingcollection}>
            <h1>New items are released weekly.</h1>
            <h1>Check out some of our newest arrivals below.</h1>
            <Link to="/shop"><p>SEE MORE</p></Link>
            <img src={trending_banner} alt="" />
        </div>
    )
}

export default TrendingCollection;