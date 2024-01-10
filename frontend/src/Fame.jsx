import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Fame = ({host}) => {
    
    const [bounty, setBounty] = useState();
    const [rep, setRep] = useState();

    useEffect(() => {axios.get(`${host}/`)
        .then((res) => {
            const data = res.data.fame;
            setBounty(data.bounty);
            setRep(data.reputation);
        })
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
