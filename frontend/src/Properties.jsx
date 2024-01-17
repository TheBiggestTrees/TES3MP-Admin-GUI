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
    ]);

    
    
    
    const [staffRank, setStaffRank] = useState(playerData.settings.staffRank);
    const [playerDataStaff, setPlayerDataStaff] = useState(playerData.settings.staffRank);
    

    const handleSettingsChange = () => {
        axios.put(`${host}/propertiesChange`, staffRank)
        .then(res => {
            setPlayerDataStaff(res.data.settings.staffRank);
            setStaffRank(res.data.settings.staffRank);
        })
    }

  return (
    <div className='flex flex-col w-full'>
        <div className='font-bold text-xl border-[#ecce24b4] border-b-2 mb-4'>Player Properties</div>

        <div className="flex justify-start gap-4">

            <div className='flex flex-col w-full'>

                <div>
                    {playerProps[0]}{playerData.settings.difficulty}
                </div>

                <div>
                    {playerProps[1]}{playerData.settings.enforcedLogLevel}
                </div>

                <div>
                    {playerProps[2]}{playerData.settings.physicsFramerate}
                </div>

                <div>
                    {playerProps[3]}{playerData.settings.consoleAllowed}
                </div>

            </div>
                     

            <div className='flex flex-col w-full'>

                <div>
                    {playerProps[4]}{playerData.settings.bedRestAllowed}
                </div>
                    
                <div>
                    {playerProps[5]}{playerData.settings.wildernessRestAllowed}
                </div>
                
                <div>
                    {playerProps[6]}{playerData.settings.waitAllowed}
                </div>
                    
                  
                <div onSubmit={e => e.preventDefault()}>
                        <label htmlFor='staffRank'>{playerProps[7]}</label>
                        <select onChange={e => {setStaffRank(
                            {settings:
                                {staffRank: e.target.value}
                            }
                        )}}
                        defaultValue={staffRank} className='bg-transparent'
                        name="staffRank"
                        id="staffRank">
                            <option className='bg-[#000000af] text-[#8392c5]' value={0}>Player</option>
                            <option className='bg-[#000000af] text-[#8392c5]' value={1}>Moderator</option>
                            <option className='bg-[#000000af] text-[#8392c5]' value={2}>Administrator</option>
                            <option className='bg-[#000000af] text-[#8392c5]' value={3}>Server Owner</option>
                        </select>
                </div>
                  
                        
            </div>                       

        </div>
            {playerDataStaff != staffRank ? <button className='border-2 px-2 mt-2 border-[#ecce24da] self-start' onClick={() => {handleSettingsChange()}}>Change</button> : null }


    </div>
  )
}

export default Properties
