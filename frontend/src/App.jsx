import React, { useState } from 'react';
import PlayerSelect from './PlayerSelect.jsx';
import Login from './Login.jsx';



function App() {

  const [iP, setIP] = useState('http://localhost:3000');

  function setIpAddress(ip) {
    setIP(`http://${ip}:3000`);
  } 

  return (
    <>
      {iP}
      <Login setIpAddress={setIpAddress} />
      <PlayerSelect host={iP}/>
      
    </>
  )
}

export default App
