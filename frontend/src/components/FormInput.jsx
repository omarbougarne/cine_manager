import React from 'react'

function FormInput({label, type, value, onChange, placeholder}){
    return(
        <div className = "mb-4">
        <label>{label}</label>
        <br />
        <input 
        className = "w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2" 
        type={type} 
        placeholder={placeholder} 
        value={value} 
        onChange={onChange}/>
        </div>
    );
}

export default FormInput;