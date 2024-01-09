import React, { useState } from 'react';
import PlayerSelect from './PlayerSelect.jsx';
import Login from './Login.jsx';



function App() {

  const [iP, setIP] = useState('');
  const [players, setPlayers] = useState([]);

  function setIpAddress(ip) {
    setIP(`http://${ip}:3000`);
  } 

  function Players(players) {
    setPlayers(players);
  }

  return (
    <>
      {iP}
      <Login setIpAddress={setIpAddress} host={iP} players={Players}/>
      {iP && <PlayerSelect host={iP}/>}
      
    </>
  )
}

export default App
