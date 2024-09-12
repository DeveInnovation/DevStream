import React from 'react';
import profile from '../../Images/profile.png';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';

const UserProfile = () => {
    return (
        <main className='w-[1144px] mx-auto mt-[100px]'>
            <div className='rounded-[24px] relative shadow-lg'>
            <div className='h-[196px] w-full rounded-t-[24px] bg-gradient-to-r from-[#652ECA] via-[#2A0A4B] to-[#3C0E39]'>
                <div className='rounded-full border-2 border-white h-[120px] w-[120px] absolute top-[24%] left-10'>
                    <Image src={profile} alt='profileImg' width={120} height={120}></Image>
                </div>
            </div>
                <div className='py-[7%] px-6 bg-white rounded-[24px]'>
                    <h3 className='text-[32px]'>Moinur Rahman</h3>
                    <address className='[20px] not-italic text-[#6C757D] py-2'>Dhaka, Bangladesh</address>
                    <ol className='flex items-center justify-start gap-4 ml-4 text-[16px]'>
                        <li className='list-disc'>@moinur</li>
                        <li className='list-disc'>UI/UX Designer at Atmotechbd</li>
                        <li className='list-disc text-[#6C757D]'>Full time</li>
                    </ol>
                    <div className='flex items-center justify-start gap-4 mt-8'>
                        <button className='w-[118px] h-[40px] rounded-[8px] border border-[#D8D8D8] flex items-center justify-center gap-2'>
                            <FaGithub/> <span>Github</span>
                        </button>
                        <button className='w-[118px] h-[40px] rounded-[8px] border border-[#D8D8D8] flex items-center justify-center gap-2'>
                            <FaLinkedinIn/> <span>Linkedin</span>
                        </button>
                        <button className='w-[118px] h-[40px] rounded-[8px] border border-[#D8D8D8] flex items-center justify-center gap-2'>
                            <FaTwitter/> <span>Twitter</span>
                        </button>
                    </div>
                    <div className='flex items-center justify-start gap-4 mt-8'>
                        <button className='w-[143px] h-[40px] rounded-[100px] bg-[#00A36C] text-white'>View Portfolio</button>
                        <button className='w-[77px] h-[40px] rounded-[100px] border border-[#00A36C] text-[#00A36C]'>Text</button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default UserProfile;