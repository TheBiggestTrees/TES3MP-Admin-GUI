import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Stats from './Stats.jsx';
import Fame from './Fame.jsx';
import Attributes from './Attributes.jsx';
import { DataContext } from './DataContext.jsx';


export default function PlayerSelect({ host }) {

  const [nameText, setNameText] = useState('');
  const [playerName, setPlayerName] = useState(null);
  const [selectedPlayer, setSelectedPlayer] = useState();
  const [players, setPlayers] = useState([]);
  const [data, setData] = useState({});
  const [hasData, setHasData] = useState(false);

  useEffect(() => {
    axios.get(`${host}/players`)
      .then(res => {
        const playerOnServer = []
        res.data.forEach(player => {
          if (player !== '.gitkeep') {
            const jsonless = player.split('.')[0];
            playerOnServer.push(jsonless);
            setPlayers(playerOnServer);
          }
        })
      })
    
  }, [])

  const PlayerData = () => {
    return (
      <>
        <div>
          <div>Selected Player: {selectedPlayer}</div>
          <div className='font-bold text-lg'>Character Name: {playerName}</div>
          <form onSubmit={handleChange}>
            <input className='bg-[#03030334] text-[#8b9cd3] rounded-full' name='playerName' value={nameText} type='text' onChange={handleName}></input>
            <button type='button' className='border-2 border-[#ecce24b4] w-36 h-12' onClick={handleChange} >Change Name</button>
          </form>
          <DataContext.Provider value={[data, setData]}>
            <Stats />
            <Fame />
            <Attributes />
          </DataContext.Provider>
        </div>
      </>
    )
  }

  const handleChange = (e) => {

    axios.put(`${host}/nameChange`, {
      login: {
        name: nameText
      }
    })
      .then((res) => {
        setPlayerName(res.data.login.name);
        console.log(playerName)
        setNameText('');
      })

    e.preventDefault();


  }

  const handleName = (e) => {
    setNameText(e.target.value);
  }

  const handleChangePlayer = (id) => {
    axios.put(`${host}/selectPlayer`, {
      player: id,
    })
      .then(res => {
        setSelectedPlayer(res.data);
      }).then(() => {
        axios.get(`${host}/`).then((res) => {
          const datax = res.data;
          setData(datax);
          setPlayerName(datax.login.name);
        })
        setHasData(true);
      })

  }

  return (
    <>

      <div className='tracking-[.125rem]'>
        {players.map((item, id) => {
          return (
            <button onClick={() => handleChangePlayer(item)} className='border-2 border-[#ecce24b4] w-36 h-12' key={id}>
              {item}
            </button>
          )
        })}

        {hasData && <PlayerData />}

      </div>

    </>
  )
}
