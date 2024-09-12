import { MailIcon } from 'lucide-react';
import React from 'react';
import { FaEnvelope, FaExternalLinkAlt, FaGithub, FaLinkedin, FaPhone, FaTwitter } from 'react-icons/fa';

const UserContact = () => {
    return (
        <div className='mx-auto w-[1144px] shadow-lg bg-white mt-14 rounded-[24px]'>
            <div className='p-6'>
            <h2 className='text-2xl py-6'>Contact Information</h2>
                <div className='w-full flex items-center justify-between text-[#6C757D] bg-[#F9FAFB] rounded-[8px] px-4 py-2 mb-4'>
                    <p className='flex items-center gap-2'><FaEnvelope/> Email</p>
                    <FaExternalLinkAlt/>
                </div>
                <div className='w-full flex items-center justify-between bg-[#F9FAFB] rounded-[8px] px-4 py-2 text-[#6C757D] mb-4'>
                    <p className='flex items-center gap-2'><FaPhone className='rotate-90'/> Phone Number</p>
                    <FaExternalLinkAlt/>
                </div>
                <div className='w-full flex items-center justify-between bg-[#F9FAFB] rounded-[8px] px-4 py-2 text-[#6C757D] mb-4'>
                    <p className='flex items-center gap-2'><FaLinkedin className=''/> LinkedIn</p>
                    <FaExternalLinkAlt/>
                </div>
                <div className='w-full flex items-center justify-between bg-[#F9FAFB] rounded-[8px] px-4 py-2 text-[#6C757D] mb-4'>
                    <p className='flex items-center gap-2'><FaTwitter className=''/> Twitter</p>
                    <FaExternalLinkAlt/>
                </div>
                <div className='w-full flex items-center justify-between bg-[#F9FAFB] rounded-[8px] px-4 py-2 text-[#6C757D]'>
                    <p className='flex items-center gap-2'><FaGithub className=''/> Github</p>
                    <FaExternalLinkAlt/>
                </div>
            </div>
        </div>
    );
};

export default UserContact;