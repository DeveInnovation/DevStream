"use client"
import HomePage from "@/components/Home/HomePage";

// server site ***

const ProfilePage = async () => {

    const res = await fetch(`https://helphand.vercel.app/cards?findtext=`)
    const data = await res.json()
    console.log(data);
    return (
        <div>
            <h1 className='text-xl text-center py-2 uppercase bg-[#BA5354] text-white'>Profile page</h1>
            <HomePage></HomePage>
        </div>
    );
};

export default ProfilePage;