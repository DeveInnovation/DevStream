"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const VerifyPage = () => {
    localStorage.setItem('verified', true)
    const verifiedpage = localStorage.getItem("verified")
    const router = useRouter()
    router.push('/');
    return (
        <div>
            {
                verifiedpage === 'true' ?
                <h1 className="text-center mt-[200px] text-2xl text-green-500">Account already verfied!</h1>
                :
                <h1 className="text-center mt-[200px] text-2xl text-green-500">Account verfied!</h1>
            }
        </div>
    );
};

export default VerifyPage;