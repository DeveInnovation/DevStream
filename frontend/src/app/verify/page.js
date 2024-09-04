import React from 'react';

const VerifyUserEmail = () => {
    return (
        <section>
      <div className="flex justify-center items-center h-[100vh] w-full bg-green-50 text-center flex-col text-white">
        <h1 className="text-[36px] mb-5 text-green-500">
          Verify your email to active your account!
        </h1>
        <h5 className="text-[18px] text-green-950">
          We've sent a confirmation link to your email. Please check your inbox
          (and spam folder, just in case).
        </h5>
        <h5 className="text-[18px]  text-green-950">
          If you don't see the email within a few minutes, try resending it or
          contact our support team for assistance
        </h5>
      </div>
    </section>
    );
};

export default VerifyUserEmail;