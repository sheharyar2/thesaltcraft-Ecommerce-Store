import styles from './Shopcategory.module.css'
import signature from '../../assets/pictures/category_main_images/signature.jpg'
import premium from '../../assets/pictures/category_main_images/premium.jpg'
import multicolor from '../../assets/pictures/category_main_images/multicolor.jpg'


function Shopcategory(){

    const categories =[signature,premium,multicolor];
    return(
        <div className={styles.Shopcategory}>
            <h1>Shop By Category</h1>
            <div className={styles.Shopcategory_parent_container}>
                
                    {
                        categories.map((img,index)=>(
                            <div className={styles.Shopcategory_child_container} key={index}>
                                <img src={img} alt="" />
                            </div>
                        ))
                    }
                
            </div>
        </div>
    )
}
export default Shopcategory;