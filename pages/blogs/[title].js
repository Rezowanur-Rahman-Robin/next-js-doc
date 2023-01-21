import React from 'react'
import { BASE_URL, endpoint } from '../../constants/api'

const Blog = ({blog}) => {
  return (
    <div className='flex flex-col min-h-screen bg-gray-800 ' >
    <div className='md:container md:mx-auto my-5'>
     <div className='flex justify-center'>
       <img src={blog.image} className='w-1/2'/>
     </div>
     <div className='border-solid border-2 border-indigo-600 bg-gray-900 p-3'>
       <h2 className='text-white text-2xl'>{blog.title}</h2>
       <h2 className='text-white text-xl'>MD Rezowanur Rahman Robin</h2>
     </div>
     	

    <div className='border-solid border-0.5 border-black-600 bg-white p-3'>
     <h2 className='text-indigo-900 text-sm'>{blog.content}</h2>
   </div>
    </div>
    </div>
    
  )
}

export default Blog

export async function getStaticPaths() {
  const res = await fetch(`${BASE_URL}${endpoint.blog}`);
  const resJson = await res.json()
  const posts = resJson.data;
  const paths = posts.map((blog)=>{
    return {
      params:{
        title:blog.title
      }
    }
  })
    // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       title: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       title: 'pre-rendering'
  //     }
  //   }
  // ]

  return {
    paths,
    fallback: false,
  };
}

export async function getServerSideProps({params}) {
  // Fetch necessary data for the blog post using params.title

  //const blog = blogs.filter((blog)=> blog.title ===params.title)
  const res = await fetch(`${BASE_URL}${endpoint.blog}/${params.title}`);
  const resJson = await res.json()
  const blog = resJson.data
  return {
    props: {
      blog: blog,
    },
  };
}