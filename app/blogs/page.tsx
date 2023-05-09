import BlogContent from "../../components/BlogPage/BlogContent";
import Navbar from "../../components/BlogPage/BlogNavbar/Navbar";
import BlogText from "../../components/BlogPage/BlogText";

interface BlogPageProps  {
  [key: string]: string;
}

export default function BlogsPage({title, content}: BlogPageProps) {

  return (
    <main className="w-full h-screen bg-[#fffff0]">
      <Navbar />
      <BlogText title={title} />
      <BlogContent content={content} />
    </main>
  )
}
