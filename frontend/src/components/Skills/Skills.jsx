import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Skills = () => {
    return (
        <div className='mx-auto w-[1144px] shadow-lg bg-white mt-14 rounded-[24px] p-6'>
        <div className='flex items-center justify-between'>
            <h3 className='text-2xl'>Skills</h3>
            <button className='p-1 bg-[#F9FAFB] rounded-full font-thin hover:text-[#00A36C] hover:bg-green-50 duration-500'><FaPlus/></button>
        </div>
            <div className='my-4 flex items-center flex-grow flex-wrap gap-4'>
                <button className='px-2 py-1 rounded-[8px] border border-[#D8D8D8] text-[#212529] hover:bg-gray-100 duration-500'>HTML</button>
                <button className='px-2 py-1 rounded-[8px] border border-[#D8D8D8] text-[#212529] hover:bg-gray-100 duration-500'>CSS</button>
                <button className='px-2 py-1 rounded-[8px] border border-[#D8D8D8] text-[#212529] hover:bg-gray-100 duration-500'>JavaScript</button>
                <button className='px-2 py-1 rounded-[8px] border border-[#D8D8D8] text-[#212529] hover:bg-gray-100 duration-500'>React.js</button>
                <button className='px-2 py-1 rounded-[8px] border border-[#D8D8D8] text-[#212529] hover:bg-gray-100 duration-500'>Next.js</button>
                <button className='px-2 py-1 rounded-[8px] border border-[#D8D8D8] text-[#212529] hover:bg-gray-100 duration-500'>BootStrap</button>
                <button className='px-2 py-1 rounded-[8px] border border-[#D8D8D8] text-[#212529] hover:bg-gray-100 duration-500'>Tailwind</button>
                <button className='px-2 py-1 rounded-[8px] border border-[#D8D8D8] text-[#212529] hover:bg-gray-100 duration-500'>Version Control (Github)</button>
                <button className='px-2 py-1 rounded-[8px] border border-[#D8D8D8] text-[#212529] hover:bg-gray-100 duration-500'>Sass/SCSS</button>
                <button className='px-2 py-1 rounded-[8px] border border-[#D8D8D8] text-[#212529] hover:bg-gray-100 duration-500'>Postman</button>
            </div>
        </div>
    );
};

export default Skills;