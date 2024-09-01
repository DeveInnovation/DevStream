import Image from 'next/image';
import React from 'react';
const flower = "/assets/flower.jpg"

const HomePage = () => {
    return (
        <div className='min-h-screen w-full bg-[#F2F2F2] text-center'>
            <h1 className='text-6xl uppercase px-20 py-10 text-[#BA5354]'>Welcome to your new project - </h1>
            <p className='text-[20px] mb-16 font-bold px-20 uppercase text-[#BA5354]'>Kaiser - Abdullah - Sujoy - Naeem</p>
            <Image className='border-t-[1px] border-[#BA5354]' layout='responsive' width="50" height="50" src={flower} alt='welcome'></Image>
        </div>
    );
};

export default HomePage;