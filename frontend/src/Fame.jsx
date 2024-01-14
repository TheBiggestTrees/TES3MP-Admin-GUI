import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from './DataContext';
import axios from 'axios';


const Fame = ({ host }) => {
    
    const [playerData, setPlayerData] = useContext(DataContext)
    const [bounty, setBounty] = useState();
    const [rep, setRep] = useState();
    const [inputBounty, setInputBounty] = useState(playerData);
    const [inputRep, setInputRep] = useState(playerData);

    useEffect(() => {
        const data = playerData.fame;
        setBounty(data.bounty);
        setRep(data.reputation);
    }, [])

    const handleSettingsChange = (type) => {

      if(type === 'bounty') {
      axios.put(`${host}/fameChange`, inputBounty)
      .then(res => {
          setPlayerData(res.data);
      })
    } else if(type === 'reputation') [
      axios.put(`${host}/fameChange`, inputRep)
      .then(res => {
          setPlayerData(res.data);
      })
    ]
      
  }

  return (
    <>
        <div className="flex w-full flex-col">
          <div className='text-xl font-bold' onSubmit={e => {e.preventDefault()}}>Fame</div>
          <label htmlFor='bounty'>Bounty: 
            <input type='number' className='bg-transparent  text-[#8b9cd3] placeholder:text-[#ecce24da]' placeholder={bounty} value={inputBounty.fame.bounty} onChange={e => 
              setInputBounty(
                {fame:
                  {bounty: e.target.value}
                }
                )
                
              } ></input>
            {playerData.fame.bounty === inputBounty.fame.bounty ? <></> : <button onClick={handleSettingsChange('bounty')}>Change</button>}
          </label>
          
          <label htmlFor='rep'>Reputation: 
            <input type='number' className='bg-transparent  text-[#8b9cd3] placeholder:text-[#ecce24da]' placeholder={rep} value={inputRep.fame.reputation} onChange={e => 
              setInputRep(
                {fame:
                  {reputation: e.target.value}
                }
                )
                
              } ></input>
            {playerData.fame.reputation === inputRep.fame.reputation ? <></> : <button onClick={handleSettingsChange('reputation')}>Change</button>}
          </label>


        </div>
    </>
  )
}

export default Fame
