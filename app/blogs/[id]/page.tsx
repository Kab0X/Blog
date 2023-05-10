"use client";

import { componentsData } from "../../../components/HomePage/HomeBlogs";
import Navbar from "@/components/HomePage/HomeNavbar/Navbar";
import BlogText from "@/components/BlogPage/BlogText";
import BlogContent from "@/components/BlogPage/BlogContent";

export default function BlogPage({ params }: { params: { id: string } }) {
    console.log(componentsData);
    console.log(params);

    const blogData = componentsData.find((blog) => {
        return blog.id === params.id;
    });

    console.log(blogData);

    return (
        <main className="h-screen w-full bg-[#fffff0]">
            {blogData && (
                <>
                    <Navbar />
                    <BlogText title={blogData.title} />
                    <BlogContent content={blogData.content} />
                </>
            )}
        </main>
    );
}
