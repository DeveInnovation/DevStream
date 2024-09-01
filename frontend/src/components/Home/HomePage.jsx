"use client"
import Image from 'next/image';
import { useState } from 'react';
const flower = "/assets/flower.jpg"

// client site ***

const HomePage = () => {
    return (
        <div className='min-h-screen w-full bg-[#ffffff] text-center'>
            <h2 className='text-[64px] text-center mx-auto mt-24'>Master the Art of Code: Learn, <br/>
                Practice, and Innovate Your <br/>
                Way to Success</h2>
                <p className='text-center my-20'>Unlock your potential with hands-on tutorials, real-world projects, <br />
                and expert guidance.</p>
                <button className='bg-primary text-[#ffffff] px-6 py-2 rounded-3xl'>Get Started</button>
        </div>
    );
};

export default HomePage;