import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Stats from './Stats.jsx';
import Fame from './Fame.jsx';
import Attributes from './Attributes.jsx';
import { DataContext } from './DataContext.jsx';
import Skills from './Skills.jsx';
import Properties from './Properties.jsx';
import Factions from './Factions.jsx';


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
        <div className='flex flex-col gap-y-4 w-full overflow-y-scroll no-scrollbar scro overflow-x-hidden bg-[#00000038] border-2 p-8 border-[#ecce24b4]'>

          <div className='font-bold text-lg'>Character Name: {playerName}</div>
          
          <DataContext.Provider value={[data, setData]}>

            <div className='flex gap-4'>
              <Properties host={ host } />
            </div>

            <div className="flex gap-4">
              <Stats host={ host } />
              <Fame host={ host } />
            </div>

            <div className='flex gap-4'>
              <Factions host={ host } />
            </div>
            
            <div className="flex gap-4">
              <Skills host={ host } />
              <Attributes host={ host } />
            </div>

          </DataContext.Provider>
        </div>
      </>
    )
  }

  return (
    <>

      <div className='tracking-[.125rem] flex flex-col w-2/3 h-[96vh]'>

          <div className="flex flex-col bg-[#00000038] items-center gap-4 my-8 border-2 p-8 border-[#ecce24b4]">
          <span>Players</span>
          <div className='flex gap-8 items-center'>
            {players.map((item, id) => {
              return (
                <button onClick={() => handleChangePlayer(item)} className={ item == playerName ? 'border-2 bg-[#ffffff09] border-[#8b9cd3] w-36 h-12  text-[#8b9cd3]' : 'border-2 border-[#ecce24b4] w-36 h-12 '} key={id}>
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