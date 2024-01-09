import axios from 'axios';
import React, { useEffect, useState } from 'react'


const host = 'http://localhost:3000';


const PlayerSelect = () => {
    const [players, setPlayers] = useState([]);
    const [selectedPlayer, setSelectedPlayer] = useState();
    const [playerName, setPlayerName] = useState(null);

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

      
  function handleChangePlayer(id) {
    
    axios.put(`${host}/selectPlayer`, {
      player: id,
    })
    .then(res => {
      setSelectedPlayer(res.data);
    })
    .then(() => {

      axios.get(`${host}/`)
      .then(resu => {
          setPlayerName(resu.data.login.name)
        })

    })
    
  }

  return (
    <>
      {players.map((item, id) => {
          return(
          <button onClick={() => handleChangePlayer(item)} className='border-2 border-[#ecce24b4] w-36 h-12' key={id}>
            {item}
          </button>
          )
        })}
        <div>Selected Player: {selectedPlayer}</div>
        <div className='font-bold text-lg'>Character Name: {playerName}</div>
    </>
  )
}

export default PlayerSelect
