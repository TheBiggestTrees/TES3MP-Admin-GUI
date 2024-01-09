import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Stats from './Stats.jsx';


const host = 'http://localhost:3000';


export default function PlayerSelect() {

  const [nameText, setNameText] = useState('');
  const [playerName, setPlayerName] = useState(null);
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState();

  useEffect(() => {
    
    axios.get(`${host}/players`)
    .then(res => {

      const playerOnServer = [];

      res.data.map(i => {
        const iAlone = i.split('.');
        playerOnServer.push(iAlone[0]);
      })
      
      setPlayers(playerOnServer);
    })

  }, []);

  const handleChange = (e) => {

    axios.put(`${host}/nameChange`, {
      login: {
        name: nameText
      }
    })
    .then(() => {

      axios.get(`${host}/`).then((res) => {
        setPlayerName(res.data.login.name)
      })
      setNameText('');
    })
    
    e.preventDefault();
 
 
  }

  function handleName(e) {
    setNameText(e.target.value);
  }

  function handleChangePlayer(id) {
    axios.put(`${host}/selectPlayer`, {
      player: id,
    })
    .then(res => {
      setSelectedPlayer(res.data);
    }).then(() => {
      axios.get(`${host}/`).then((res) => {
        setPlayerName(res.data.login.name)
      })
    })
    
  }

  return (
    <>
      <div className='tracking-[.125rem]'>
        {players.map((item, id) => {
          return(
          <button onClick={() => handleChangePlayer(item)} className='border-2 border-[#ecce24b4] w-36 h-12' key={id}>
            {item}
          </button>
          )
        })}
        <div>Selected Player: {selectedPlayer}</div>
        <div className='font-bold text-lg'>Character Name: {playerName}</div>
        <form onSubmit={handleChange}>
          <input className='bg-[#03030334] text-[#8b9cd3] rounded-full' name='playerName' value={nameText} type='text' onChange={handleName}></input>
          <button type='button' onClick={handleChange} >Change Name</button>
        </form>
        <Stats />
      </div>

    </>
  )
}
