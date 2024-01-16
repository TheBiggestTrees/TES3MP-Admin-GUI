import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from './DataContext';
import axios from 'axios';


const Fame = ({ host }) => {
    
    const [playerData, setPlayerData] = useContext(DataContext)
    const [bounty, setBounty] = useState(playerData.fame.bounty);
    const [rep, setRep] = useState(playerData.fame.reputation);
    const [inputBounty, setInputBounty] = useState('');
    const [inputRep, setInputRep] = useState('');
    const [createSend, setCreateSend] = useState({fame: {reputation: inputRep, bounty: inputBounty}});

    const [dataReady, setDataReady] = useState();

    
    
    useEffect(() => {
        const data = playerData.fame;
        setBounty(data.bounty);
        setRep(data.reputation);
    }, [])


  function handleSettingsChange() {
    
      if (inputRep === '' && inputBounty === '') {

        setCreateSend({
            fame: {
              reputation: rep,
              bounty: bounty
            }
          });

      } else if (inputRep === '') {
        setCreateSend({
          fame: {
            reputation: rep,
            bounty: inputBounty
          }
        });

      } else if (inputBounty === '') {
        setCreateSend({
          fame: {
            reputation: inputRep,
            bounty: bounty
          }
        });

      } else {
        setCreateSend({
          fame: {
            reputation: inputRep,
            bounty: inputBounty
          }
        });
        
      }
        


    }
    
    function sendData() {

        try {
          axios.put(`${host}/fameChange`, createSend).then(res =>
            {
              setBounty(res.data.fame.bounty);
              setRep(res.data.fame.reputation);
            });
        } catch (error) {
          console.log(error);
        }

        setInputBounty('');
        setInputRep('');
        setDataReady(false);

    }
    
  return (
    <>
        <div className="flex w-full flex-col">
          <div className='text-xl font-bold' >Fame</div>
          <form onSubmit={e => {e.preventDefault()
          sendData()}}>
            <label htmlFor='bounty'>Bounty:
              <input name='bounty' id='bounty' type='number' className='bg-transparent  text-[#8b9cd3] placeholder:text-[#ecce24da] px-1' placeholder={bounty} value={ inputBounty } onChange={e => {setInputBounty(e.target.value)
              setDataReady(true);}} ></input>

            </label>
            
            <label htmlFor='rep'>Reputation:
              <input name='rep' id='rep' type='number' className='bg-transparent  text-[#8b9cd3] placeholder:text-[#ecce24da] px-1' placeholder={rep} value={ inputRep } onChange={e => {setInputRep(e.target.value);
              setDataReady(true);}}
                
                 ></input>
            
            </label>
            {dataReady && <button className='border-2 px-2 mt-2 border-[#ecce24da]' type='submit' onClick={() => handleSettingsChange()}>Change</button>}
          </form>

        </div>
    </>
  )
}

export default Fame
