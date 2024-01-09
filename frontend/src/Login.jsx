
import axios from 'axios';
import React, { useState } from 'react'

const Login = ({setIpAddress}) => {

    const [serverIP, setServerIP] = useState('');
    

    const handleSubmit = (e) => {
        setIpAddress(serverIP);
        setServerIP('');
        
        e.preventDefault();
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="ip">
                    Server IP: 
                    <input className='bg-[#03030334] text-[#8b9cd3] rounded-full'  id='ip' type='text' value={serverIP} onChange={(e) => {setServerIP(e.target.value)}} />
                </label>
                <button type='button' onClick={handleSubmit}>Continue</button>
            </form>
        </>
    )
    }

export default Login
