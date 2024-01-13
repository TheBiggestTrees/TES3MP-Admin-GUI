import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from './DataContext';


const Fame = () => {
    
    const [playerData, setPlayerData] = useContext(DataContext)
    const [bounty, setBounty] = useState();
    const [rep, setRep] = useState();

            setBounty(data.bounty);
    useEffect(() => {
        const data = playerData.fame;
        setBounty(data.bounty);
        setRep(data.reputation);
    }, [])

  return (
    <>
        <div className='text-xl font-bold'>Fame</div>
        <div>Bounty: {bounty}</div>
        <div>Reputation: {rep}</div>
    </>
  )
}

export default Fame