import React, { useState } from 'react';
import PlayerSelect from './PlayerSelect.jsx';
import Login from './Login.jsx';



function App() {

  const [iP, setIP] = useState('');

  function setIpAddress(ip) {
    setIP(`http://${ip}:3000`);
  } 

  function showSettings() {
    setIP('');
  }

  return (
    <>
      <div className='flex flex-col gap-8 w-100vw items-center '>
        {iP && <button className='border-2 border-[#ecce24b4] w-36 h-12 fixed self-start m-2' onClick={showSettings}>Change Server</button>}
        {!iP && <Login setIpAddress={setIpAddress} host={iP} />}
        {iP && <PlayerSelect host={iP}/>}
      </div>
    </>
  )
}

export default App
