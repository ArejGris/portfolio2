import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
const postsDirectory=path.join(process.cwd(),'posts')
export function getPostData(filename){
    const postSlug=filename.replace(/\.md$/,'')
    const filename1=`${postSlug}.md`
    const filePath=path.join(postsDirectory,filename1)
    const fileContent=fs.readFileSync(filePath)
    const {data, content}=matter(fileContent)
    const postData={
        ...data
    }
    return postData
}
export function getAllPosts(){
    
    const postFiles=fs.readdirSync(postsDirectory)
   const allPosts= postFiles.map(postFile=>{
        return getPostData(postFile)
    })
    const sortedPosts=allPosts.sort((postA,postB)=>postA.date > postB.date ? -1 : 1)
    return sortedPosts
}
export function getFeaturedPost(){
    const allposts=getAllPosts()
    const featuredPosts=allposts.filter(post=> post.isFeatured)
    return featuredPosts
}