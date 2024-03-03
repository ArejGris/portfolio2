import PostGrid from "@/components/posts/post-grid";
import { getAllPosts } from "@/lib/post-util";
const Posts = () => {
    const Dummy_Data=getAllPosts()
    return ( 
    <>
    <PostGrid posts={Dummy_Data}/>
    </> );
}
 
export default Posts;