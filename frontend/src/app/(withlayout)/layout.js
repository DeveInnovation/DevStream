import Navbar from '@/SharedComponent/Navbar/Navbar';
import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default layout;