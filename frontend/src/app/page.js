import HomePage from "@/components/Home/HomePage";
import Skills from "@/components/Skills/Skills";
import UserAbout from "@/components/UserAbout/UserAbout";
import UserContact from "@/components/UserContacts/UserContact";
import UserProfile from "@/components/UserProfile/UserProfile";
import Navbar from "@/SharedComponent/Navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden bg-[#F9FAFB] py-14">
        <Navbar/>
       <UserProfile/>
       <UserAbout/>
       <UserContact/>
       <Skills/>
    </div>
  );
}