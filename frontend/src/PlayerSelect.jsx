import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Stats from './Stats.jsx';
import Fame from './Fame.jsx';
import Attributes from './Attributes.jsx';
import { DataContext } from './DataContext.jsx';
import Skills from './Skills.jsx';


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
        <div className='flex flex-col gap-y-4'>

          <div className='font-bold text-lg mt-8'>Character Name: {playerName}</div>
          
          <DataContext.Provider value={[data, setData]}>

            <div className="flex justify-start">
              <Stats />
              <Fame />
            </div>
            
            <div className="flex">
              <Skills />
              <Attributes />
            </div>

          </DataContext.Provider>
        </div>
      </>
    )
  }

  return (
    <>

      <div className='tracking-[.125rem]'>

          <div className="flex flex-col w-fit items-center gap-4 mt-8 border-2 p-8 border-[#ecce24b4]">
          <span>Players</span>
          <div className='flex gap-8 justify-center'>
            {players.map((item, id) => {
              return (
                <button onClick={() => handleChangePlayer(item)} className={ item == playerName ? 'border-2 border-[#8b9cd3] w-36 h-12  text-[#8b9cd3]' : 'border-2 border-[#ecce24b4] w-36 h-12 '} key={id}>
                  {item}
                </button>
              )
            })}
          </div>
        </div>

        {data.login && <PlayerData />}

      </div>

    </>
  )

}