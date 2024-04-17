import styles from './BlogSection.module.css';
import blog from '../../common/blogsection';

function BlogSection(){

    const handleBlog =()=>{
        console.log("abc")
    }
    return(
        <>
        <div className={styles.main_head}>
        <h1>OUR BLOG</h1>

        </div>
        <div className={styles.blogsection} >
                {
                    blog.map((blog,index)=>
                    (
                        <div className={styles.blog} key={index} onClick={handleBlog}>
                        <img src={blog.image} alt="" />
                       <div className={styles.blog_details}>
                       <h1>{blog.title}</h1>
                        <p>{blog.date}</p>
                        <p>{blog.displayText}</p>
                        </div>
                        </div>
                    ))
                }
        </div>
        </>

    )
}

export default BlogSection;