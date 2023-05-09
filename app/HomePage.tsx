import HomeBlogs from "./components/HomePage/HomeBlogs";
import HomeText from "./components/HomePage/HomeText";
import HomeNavbar from "./components/HomePage/HomeNavbar/Navbar";
import HomeSort from "./components/HomePage/HomeSort";

export default function HomePage() {
  return (
    <div className="w-full h-screen bg-[#fffff0]">
      <HomeNavbar />
      <div className="flex justify-between px-20 mt-10 items-end">
        <HomeText />
        <HomeSort />
      </div>
      <HomeBlogs />
    </div>
  );
}
