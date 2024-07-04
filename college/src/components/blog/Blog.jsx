import React from "react"
import Back from "../common/back/Back"
import BlogCard from "./BlogCard"
import "./blog.css"

const Blog = () => {
  return (
    <>
      <Back title='Blog Posts' />
      <section className='blog padding '>
        <div className='container grid2 mt-6'>
          <BlogCard />
        </div>
      </section>
    </>
  )
}

export default Blog
