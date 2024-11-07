import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import FormInput from './FormInput';


function SignUpForm(){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        axios
        .post('http://localhost:5000/auth/register', {firstName, lastName, email, password})
        .then(()=> {
            alert('registration succeded')
            setFirstName('');
            setLastName('');
            setEmail('');
            setPassword('');
            navigate('/login');

        })
        .catch((error)=>{
            console.error('Error during registration:', error);
    })
    };
    return(
        <form className="text-center border rounded-lg w-[600px] h-[400px] p-9" onclick={handleSubmit}>
            <FormInput
            label = 'First Name'
            type = 'text'
            value = {firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder={'first name'}
            />
            <FormInput
            label = 'Last Name'
            type = 'text'
            value = {lastName}
            onChange = {(e) => setLastName(e.target.value)}
            />
            <FormInput
            label = 'Email'
            type = 'email'
            value = {email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <FormInput
            label = 'Password'
            type = 'password'
            value = {password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button className="w-[200px] h-[50px] border hover:bg-teal-900" type="submit">
                Sign Up
            </button>
        </form>
    )
}
export default SignUpForm;