import styles from './featuredproducts.module.css';
import featuredproducts from '../../common/featuredproducts.js';

function FeaturedProducts(){
    return(
        <div className={styles.container}>
        <div className={styles.heading}>
            <h1>Featured Products</h1>
        </div>
        <div className={styles.featuredproducts}>
            {
                featuredproducts.map((product,index)=>(
                    <div key={index}>
                        <img src={product.image} alt="" />
                        <div className={styles.featuredproducts_detail}>
                        <div className={styles.featuredproducts_title}>
                        <p>{product.Category}</p>
                        <p>{product.name}</p>
                        </div>
                        <div className={styles.featuredproducts_prices}>
                        <p><s>RS:{product.regular_price}.00</s></p>
                        <p>RS:{product.sale_price}.00</p>
                        </div>
                        </div>
                       
                        
                    </div>
                ))
            }
        </div>
        </div>
       
    )
}
export default FeaturedProducts;