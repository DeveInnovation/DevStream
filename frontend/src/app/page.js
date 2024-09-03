import HomePage from "@/components/Home/HomePage";
import Navbar from "@/SharedComponent/Navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
       <Navbar/>
       <HomePage></HomePage>
    </div>
  );
}