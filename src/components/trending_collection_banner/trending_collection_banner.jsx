import styles from './trending_collection_banner.module.css'
import trendingCollectionImage from '../../assets/pictures/other_images/trending_banner.png'

function TrendingCollection(){
    return(
        <div className={styles.trendingcollection}>
            <h1>New items are released weekly.</h1>
            <h1>Check out some of our newest arrivals below.</h1>
            <img src={trendingCollectionImage} alt="" />
        </div>
    )
}

export default TrendingCollection;