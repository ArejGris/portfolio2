'use client'
import PostHeader from "./post-header";
import ReactMarkdown from 'react-markdown'
import './post-content.css'

const PostContent = ({one}) => {
   
    return (
    <article className="content">
    <PostHeader title={one.title} image={one.image}/>
    <ReactMarkdown className="rmd">{one.excerpt}</ReactMarkdown>
    </article> );
}
 
export default PostContent;