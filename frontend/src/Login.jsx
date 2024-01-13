
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
                <button className='border-2 border-[#ecce24b4] w-36 h-12' type='button' onClick={handleSubmit}>Continue</button>
            </form>
        </>
    )
    }

export default Login
