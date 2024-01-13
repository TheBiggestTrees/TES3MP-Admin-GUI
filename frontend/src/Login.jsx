
import React, { useState } from 'react'

const Login = ({setIpAddress}) => {

    const [serverIP, setServerIP] = useState('');

    const handleSubmit = (e) => {
        if(serverIP !== '') {
            setIpAddress(serverIP);
            setServerIP('');        
        }
        e.preventDefault();
    };



    return (
        <>
            <form className='flex flex-col items-center gap-8 mt-8' onSubmit={handleSubmit}>
                <label htmlFor="ip">
                    Server IP: 
                    <input className='bg-[#03030334] text-center text-[#8b9cd3] m-2 p-2 rounded-full'  id='ip' type='text' value={serverIP} onChange={(e) => {setServerIP(e.target.value)}} />
                </label>
                <button className='border-2 border-[#ecce24b4] w-36 h-12' type='button' onClick={handleSubmit}>Continue</button>
            </form>
        </>
    )
    }

export default Login
