import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Stats from './Stats.jsx';
import Fame from './Fame.jsx';
import Attributes from './Attributes.jsx';
import { DataContext } from './DataContext.jsx';


export default function PlayerSelect({ host }) {

  const [playerName, setPlayerName] = useState(null);
  const [selectedPlayer, setSelectedPlayer] = useState();
  const [players, setPlayers] = useState([]);
  const [data, setData] = useState({});
  

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
        }).catch(e => {
          console.log(e);
        })
      
  }, []) 

  const handleChangePlayer = (id) => {

     axios.put(`${host}/selectPlayer`, {
       player: id,
     })
      .then(res => {
        setSelectedPlayer(res.data);

        axios.get(`${host}/`)
          .then((res) => {
            const datax = res.data;
            setPlayerName(datax.login.name);
            setData(datax);
          }).catch(e => {
            console.log(e);
            throw new Error(e);
          })

      }).catch(e => {
        console.log(e);
        throw new Error(e);
      })
      
  }
    

  const PlayerData = () => {
    return (
      <>
        <div>

          <div className='font-bold text-lg'>Character Name: {playerName}</div>
          
          <DataContext.Provider value={[data, setData]}>

            <Stats />
            <Fame />
            <Attributes />

          </DataContext.Provider>
        </div>
      </>
    )
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

        {data.login && <PlayerData />}

      </div>

    </>
  )

}