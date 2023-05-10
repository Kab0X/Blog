import HomeBlogs from "../components/HomePage/HomeBlogs";
import HomeText from "../components/HomePage/HomeText";
import HomeNavbar from "../components/HomePage/HomeNavbar/Navbar";
import HomeSort from "../components/HomePage/HomeSort";

export default function HomePage() {
    return (
        <div className="h-screen w-full bg-[#fffff0]">
            <HomeNavbar />
            <div className="mt-6 flex items-end justify-between px-20">
                <HomeText />
                <HomeSort />
            </div>
            <HomeBlogs />
        </div>
    );
}
