import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from './DataContext';


const Fame = () => {
    
    const [playerData, setPlayerData] = useContext(DataContext)
    const [bounty, setBounty] = useState();
    const [rep, setRep] = useState();

    useEffect(() => {
        const data = playerData.fame;
        setBounty(data.bounty);
        setRep(data.reputation);
    }, [])

  return (
    <>
        <div className="flex w-full flex-col">
          <div className='text-xl font-bold'>Fame</div>
          <div>Bounty: {bounty}</div>
          <div>Reputation: {rep}</div>
        </div>
    </>
  )
}

export default Fame
