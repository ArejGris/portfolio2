import PostContent from "@/components/posts/post-details/post-content";
import { Dummy_Data} from "@/lib/getAllProject";
function getPostData(slug){
    const post= Dummy_Data.filter(post=>post.slug==slug)
    console.log(post)
    return post[0]
   }
const OnePost = (context) => {
    const slug=context.params.slug
    console.log(slug)
    const one=getPostData(slug)
    console.log("one",one)
    return (  
    <>
    <PostContent one={one}/>
    </>);
}
 
export default OnePost;