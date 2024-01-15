import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from './DataContext';
import axios from 'axios';


const Fame = ({ host }) => {
    
    const [playerData, setPlayerData] = useContext(DataContext)
    const [bounty, setBounty] = useState(playerData.fame.bounty);
    const [rep, setRep] = useState(playerData.fame.reputation);
    const [createSend, setCreateSend] = useState(``);
    const [inputBounty, setInputBounty] = useState('');
    const [inputRep, setInputRep] = useState('');
    useEffect(() => {
        const data = playerData.fame;
        setBounty(data.bounty);
        setRep(data.reputation);
    }, [])

  function handleSettingsChange() {

      if (inputRep === '' || inputRep === rep) {
        setCreateSend(
          {
            fame: {
              reputation: playerData.fame.reputation,
              bounty: inputBounty
            }
          }
        )

      } else if (inputBounty === '' || inputBounty === bounty) {
        setCreateSend(
          {
            fame: {
              reputation: inputRep,
              bounty: playerData.fame.bounty
            }
          }
        )
  
      } else {
        setCreateSend(
          {
            fame: {
              reputation: inputRep,
              bounty: inputBounty
            }
          })
        
      }

      sendData()
    }
    
    function sendData() {

        try {
          axios.put(`${host}/fameChange`, createSend).then(res =>
            {
              console.log(res)
            });
        } catch (error) {
          console.log(error);
        }
          // setInputRep('');
          // setInputBounty('');
          // setCreateSend('');
    }
    
  return (
    <>
        <div className="flex w-full flex-col">
          <div className='text-xl font-bold' >Fame</div>
          <form onSubmit={e => {e.preventDefault()}}>
            <label htmlFor='bounty'>Bounty:
              <input name='bounty' id='bounty' type='number' className='bg-transparent  text-[#8b9cd3] placeholder:text-[#ecce24da]' placeholder={bounty} value={ inputBounty } onChange={e => setInputBounty(e.target.value)} ></input>
            
            </label>
            
            <label htmlFor='rep'>Reputation:
              <input name='rep' id='rep' type='number' className='bg-transparent  text-[#8b9cd3] placeholder:text-[#ecce24da]' placeholder={rep} value={ inputRep } onChange={e => setInputRep(e.target.value)} ></input>
            
            </label>
            {<button onClick={() => handleSettingsChange()}>Change</button>}
          </form>

        </div>
    </>
  )
}

export default Fame
