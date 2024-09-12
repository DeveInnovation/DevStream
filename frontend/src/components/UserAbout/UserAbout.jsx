import React from 'react';
import { FaEdit } from 'react-icons/fa';

const UserAbout = () => {
    return (
        <div className='mx-auto w-[1144px] shadow-lg bg-white mt-14 rounded-[24px]'>
        <div className='flex items-center justify-between px-6 py-6'>
            <h3 className='text-2xl'>About</h3>
            <div className='p-2 rounded-full bg-gray-50'>
            <FaEdit className='text-2xl bg-gray-50'/>
            </div>
        </div>
            <article className='px-6 text-justify pb-14'>
            Hello, I'm Moinur Rahman Naeem, a dedicated UI/UX designer with a keen eye for detail and a passion for creating seamless, user-centric designs. With a strong background in translating concepts into visually appealing and highly functional interfaces, I thrive on the challenge of crafting digital experiences that resonate with users.. <br />
            <br />
             My expertise lies in understanding user behavior, wireframing, prototyping, and delivering designs that not only meet but exceed client expectations. I am committed to staying on top of industry trends, ensuring my work is not only aesthetically pleasing but also aligned with the latest design principles and technologies. <br />
             <br />
             Let's connect and explore opportunities to collaborate on projects that demand innovative design solutions. Together, we can create engaging and delightful user experiences that leave a lasting impression. <br/>
             <br />
                <q>Feel free to customize it based on your specific experiences, skills, and career aspirations.</q>
            </article>
        </div>
    );
};

export default UserAbout;