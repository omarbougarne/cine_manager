import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import FormInput from './FormInput';


function LoginForm(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
        .post('http://localhost:5000/api/auth/login', {email, password})
        .then((response) => {
            const token = response.data.token;
            localStorage.setItem('token', token)
            alert('Login Successful');
            navigate('/account')
        })
        .catch((error)=>{
            console.error("Error loging in", eror);
            
        }

        )}
        return (
            <form className='text-center border rounded-lg w-[600px] h-[400px] p-9' onClick={handleSubmit}>
    
                <FormInput
                    label = "Email"
                    type = "email"
                    value={email}
                    placeholder="email"
                    onChange={(e)=> setEmail(e.target.value)}
                />
                <FormInput
                    label = "Password"
                    type = "password"
                    value={password}
                    placeholder="password"
                    onChange={(e)=> setPassword(e.target.value)}
                />
    
                <button className="w-[200px] h-[50px] border hover:bg-teal-900" type="submit">
                    Login
                </button>
            </form>
        )        
}


    

export default LoginForm;