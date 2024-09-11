"use client"
import Avvvatars from "avvvatars-react";
import Image from "next/image";
import Link from "next/link";
const siteLogo = '/assets/logo.png';
const null_avatar = "/assets/null_avatar.jpg"; 

const Navbar = () => {

    const menuItems =  <>
        <li><Link href={'/'}>Home</Link></li>
        {/* <li><Link href={'/'}>About</Link></li> */}
        <li><Link href={'/login'}>Login</Link></li>
        <li><Link href={'/signup'}>Signup</Link></li>
    </>

    return (
        <nav className="fixed top-0 w-full z-50 backdrop-blur-lg border-b-[1px] bg-[#ffffff94] border-black">
            <div className="flex justify-between items-center w-[1144px] mx-auto h-[65px]">
                <div>
                    <Image src={siteLogo} width={150} height={100} alt="LOGO"></Image>
                </div>
                <div className="flex items-center space-x-5">
                    <ul className="flex items-center gap-8">
                        {menuItems}
                    </ul>
                    <div>
                        {/* <Image className="rounded-[100%]" src={null_avatar} alt="userprofile" width={40} height={40}></Image> */}
                        <Link href={'/profile'}><button className="border-[1px] rounded-full border-gray-300"><Avvvatars style="shape" value="3" /></button></Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;