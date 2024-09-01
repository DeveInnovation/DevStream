"use client"
import Image from 'next/image';
import { useState } from 'react';
const flower = "/assets/flower.jpg"

// client site ***

const HomePage = () => {
    const [counter, setCounter] = useState(0)

    return (
        <div className='min-h-screen w-full bg-[#F2F2F2] text-center'>
            <div className='flex justify-center items-center mx-auto w-full'>
                <button onClick={() => setCounter(counter-1)} className='font-bold text-[80px] mr-20 inline-block'>-</button>
                <h2 className='text-[80px] text-[#BA5354] inline-block'>{counter}</h2>
                <button onClick={() => setCounter(counter+1)} className='font-bold text-[80px] ml-20 inline-block'>+</button>
            </div>
            <h1 className='text-6xl uppercase px-20 py-10 text-[#BA5354]'>- Welcome to your new project - </h1>
            <p className='text-[20px] mb-16 font-bold px-20 uppercase text-[#BA5354]'>Kaiser - Abdullah - Sujoy - Naeem</p>
            <Image className='border-t-[1px] border-[#BA5354]' layout='responsive' width="50" height="50" src={flower} alt='welcome'></Image>
        </div>
    );
};

export default HomePage;