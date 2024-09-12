import HomePage from "@/components/Home/HomePage";
import UserAbout from "@/components/UserAbout/UserAbout";
import UserContact from "@/components/UserContacts/UserContact";
import UserProfile from "@/components/UserProfile/UserProfile";
import Navbar from "@/SharedComponent/Navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden bg-[#F9FAFB]">
        <Navbar/>
       <UserProfile/>
       <UserAbout/>
       <UserContact/>
    </div>
  );
}