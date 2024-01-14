import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from './DataContext';
import axios from 'axios';

const Properties = ({ host }) => {

    const [playerData, setPlayerData] = useContext(DataContext)
    const [properties, setProperties] = useState(Object.values(playerData.settings));
    const [playerProps, setPlayerProps] = useState([
        'Player Difficulty: ',
        'Logging Level: ',
        'Physics FPS: ',
        'Console Allowed: ',
        'Bedrest Allowed: ',
        'Wildrest Allowed: ',
        'Wait Allowed: ',
        'Staff Rank: ',
    ])
    const [staffRank, setStaffRank] = useState(playerData.settings.staffRank);

    

    const handleSettingsChange = () => {
        axios.put(`${host}/dataChange`, staffRank)
        .then(res => {
            setPlayerData(res.data);
        })
        
    }

  return (
    <div className='flex flex-col w-full'>
        <div className='font-bold text-xl border-[#ecce24b4] border-b-2 mb-4'>Player Properties</div>

        <div className="flex justify-start gap-4">
            <div className='flex flex-col w-full'>
                {properties.map((item, index) => {
                    if(index <= 3) {
                        return (
                            <div key={index}>
                                {playerProps[index]}{item}
                            </div>
                        )
                    }
                })}
            </div>
            <div className='flex flex-col w-full'>
                  {properties.map((item, index) => {
                      if (index === 7) {


                          return (<div onSubmit={e => e.preventDefault()} key={index}>
                              <label htmlFor='staffRank'>{playerProps[index]}</label>
                              <select onChange={e => setStaffRank(
                                    {settings:
                                        {staffRank: e.target.value}
                                    }
                                )} 
                                defaultValue={`${staffRank}`} className='bg-transparent' 
                                name="staffRank" 
                                id="staffRank">
                                  <option className='bg-[#000000af] text-[#8392c5]' value='0'>Player</option>
                                  <option className='bg-[#000000af] text-[#8392c5]' value='1'>Moderator</option>
                                  <option className='bg-[#000000af] text-[#8392c5]' value='2'>Administrator</option>
                                  <option className='bg-[#000000af] text-[#8392c5]' value='3'>Server Owner</option>
                              </select>
                              {playerData.settings.staffRank === staffRank || playerData.settings.staffRank === staffRank.settings.staffRank ? <></> : <button onClick={handleSettingsChange}>Change</button> }
                          </div>)

                      } else if (index > 3) {
                          return (
                            <div key={index}>
                                {playerProps[index]}{item}
                            </div>
                        )
                    }
                })}
            </div>
        </div>


    </div>
  )
}

export default Properties
