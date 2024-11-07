import React from 'react';
import LoginForm from '../components/LoginForm';

function SignUpPage() {
    return (
        <div className="w-full h-screen flex">
            <div className="w-[50%] h-[100%] bg-[#1a1a1a] text-white flex justify-center items-center">
                <LoginForm />
            </div>
            <div className="w-[50%] h-[100%] flex justify-center items-center bg-teal-800">
                <h2 className="text-3xl text-white">Login</h2>
            </div>
        </div>
    );
}

export default SignUpPage;
