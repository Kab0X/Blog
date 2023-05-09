'use client';

import { useRouter } from 'next/router';
import BlogPageId from '../page'
import { useEffect, useState } from 'react';
import { componentsData } from '../../../components/HomePage/HomeBlogs';

export default function BlogPage({params}: {params: {id: string}}) {
  console.log(componentsData)
  console.log(params)

  const blogData = componentsData.find((blog) => {
    return blog.id === params.id
  })

  console.log(blogData);

  return (
    <main className="w-full h-screen bg-[#fffff0]">
        {blogData && <BlogPageId title={blogData.title} content={blogData.content} />}
    </main>
  )
}
