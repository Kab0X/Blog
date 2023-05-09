import BlogContent from "../components/BlogPage/BlogContent";
import Navbar from "../components/BlogPage/BlogNavbar/Navbar";
import BlogText from "../components/BlogPage/BlogText";

export default function BlogsPage() {
  return (
    <main className="w-full h-screen bg-[#fffff0]">
      <Navbar />
      <BlogText />
      <BlogContent />
    </main>
  )
}
