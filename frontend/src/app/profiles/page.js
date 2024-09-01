import HomePage from "@/components/Home/HomePage";

// server site ***

const ProfilePage = async () => {
    const res = await fetch(`https://profile-view-be.vercel.app/profile/@spsujoy`, {cache: 'no-store'})
    const data = await res.json()
    return (
        <div>
            <h1 className='text-xl text-center py-2 uppercase bg-[#BA5354] text-white'>Profile page - {data.username}</h1>
            <HomePage></HomePage>
        </div>
    );
};

export default ProfilePage;