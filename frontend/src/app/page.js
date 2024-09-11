import HomePage from "@/components/Home/HomePage";
import UserProfile from "@/components/UserProfile/UserProfile";
import Navbar from "@/SharedComponent/Navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
       <Navbar/>
       <UserProfile/>
    </div>
  );
}