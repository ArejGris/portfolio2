'use client'
import PostGrid from '../posts/post-grid';
import './feature.css'
const FeaturedPost = ({posts}) => {
    return (
    <section className='featured-post'>
        <PostGrid posts={posts}/>
    </section>);
}
 
export default FeaturedPost;