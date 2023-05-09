import HomeBlogs from "./HomeBlogs";
import HomeText from "./HomeText";
import HomeNavbar from "./Navbar/HomeNavbar";

export default function HomePage() {
  return (
    <div className="w-full h-screen bg-[#fffff0]">
      <HomeNavbar />
      <HomeText />
      <HomeBlogs />
    </div>
  );
}
