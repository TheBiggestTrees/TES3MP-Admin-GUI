import React, { useState } from 'react';
import PlayerSelect from './PlayerSelect.jsx';
import Login from './Login.jsx';



function App() {

  const [iP, setIP] = useState('');

  function setIpAddress(ip) {
    setIP(`http://${ip}:3000`);
  } 

  // function Players(players) {
  //   setPlayers(players);
  // }

  function showSettings() {
    setIP('');
  }

  return (
    <>
      {iP}
      {iP && <button className='border-2 border-[#ecce24b4] w-36 h-12' onClick={showSettings}>Settings</button>}
      {!iP && <Login setIpAddress={setIpAddress} host={iP} />}
      {iP && <PlayerSelect host={iP}/>}
    </>
  )
}

export default App
