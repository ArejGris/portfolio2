'use client'
import Image from "next/image";
import './post-header.css'
const PostHeader = ({title,image}) => {
    return ( <div className="post-header">
    <header className="header">
        <h1>{title}</h1>
        <Image src={image} width={200} height={130} alt="alt"/>
    </header>
    <div className="line"></div> 
    </div>
    );
}
 
export default PostHeader;