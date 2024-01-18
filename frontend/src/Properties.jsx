import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from './DataContext';
import axios from 'axios';

const Properties = ({ host }) => {

    const [playerData, setPlayerData] = useContext(DataContext);
    const [hasData, setHasData] = useState(false);
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

    const handleSettingsChange = () => {
        axios.put(`${host}/propertiesChange`, playerData.settings)
        .then(res => {
            playerData.settings = res.data.settings
            console.log(playerData .settings)
            setHasData(false);
        })
    }

  return (
    <div className='flex flex-col w-full'>
        <div className='font-bold text-xl border-[#ecce24b4] border-b-2 mb-4'>Player Properties</div>

        <div onSubmit={e => {e.preventDefault()}} className="flex flex-col md:flex-row justify-start md:gap-4">

            <div className='flex flex-col w-full'>

                <div >
                        <label htmlFor='difficulty'>{playerProps[0]}</label>
                        <select 
                        onChange={e => {
                              !isNaN(e.target.value) ? playerData.settings.difficulty = +e.target.value : playerData.settings.difficulty = e.target.value

                              setHasData(true);
                        }}
                        defaultValue={playerData.settings.difficulty} 
                        className='bg-transparent'
                        name="difficulty"
                        id="difficulty">
                            <option className='bg-[#000000af] text-[#8392c5]' value={5}>Super Easy</option>
                            <option className='bg-[#000000af] text-[#8392c5]' value={25}>Easy</option>
                            <option className='bg-[#000000af] text-[#8392c5]' value={50}>Medium</option>
                            <option className='bg-[#000000af] text-[#8392c5]' value={75}>Hard</option>
                            <option className='bg-[#000000af] text-[#8392c5]' value={100}>Super Hard</option>
                            <option className='bg-[#000000af] text-[#8392c5]' value={'default'}>Default</option>
                        </select>
                </div>

                <div >
                        <label htmlFor='enforcedLogLevel'>{playerProps[1]}</label>
                        <select 
                        onChange={e => {
                              !isNaN(e.target.value) ? playerData.settings.enforcedLogLevel = +e.target.value : playerData.settings.enforcedLogLevel = e.target.value

                              setHasData(true);
                        }}
                        defaultValue={playerData.settings.enforcedLogLevel} 
                        className='bg-transparent'
                        name="enforcedLogLevel"
                        id="enforcedLogLevel">
                            <option className='bg-[#000000af] text-[#8392c5]' value={0}>Verbose</option>
                            <option className='bg-[#000000af] text-[#8392c5]' value={1}>Info</option>
                            <option className='bg-[#000000af] text-[#8392c5]' value={2}>Warnings</option>
                            <option className='bg-[#000000af] text-[#8392c5]' value={3}>Errors</option>
                            <option className='bg-[#000000af] text-[#8392c5]' value={4}>Fatal</option>
                            <option className='bg-[#000000af] text-[#8392c5]' value={'default'}>Default</option>
                        </select>
                </div>

                <div >
                        <label htmlFor='physicsFramerate'>{playerProps[2]}</label>
                        <select 
                        onChange={e => {
                            !isNaN(+e.target.value) ? playerData.settings.physicsFramerate = +e.target.value : playerData.settings.physicsFramerate = e.target.value 


                        }}
                        defaultValue={playerData.settings.physicsFramerate} 
                        className='bg-transparent'
                        name="physicsFramerate"
                        id="physicsFramerate">
                            <option className='bg-[#000000af] text-[#8392c5]' value={30}>30 FPS</option>
                            <option className='bg-[#000000af] text-[#8392c5]' value={40}>40 FPS</option>
                            <option className='bg-[#000000af] text-[#8392c5]' value={60}>60 FPS</option>
                            <option className='bg-[#000000af] text-[#8392c5]' value={120}>120 FPS</option>
                            <option className='bg-[#000000af] text-[#8392c5]' value={144}>144 FPS</option>
                            <option className='bg-[#000000af] text-[#8392c5]' value={'default'}>Default</option>
                        </select>
                </div>

                <div >
                        <label htmlFor='consoleAllowed'>{playerProps[3]}</label>
                        <select 
                          onChange={e => {
                              playerData.settings.consoleAllowed = e.target.value

                              setHasData(true);
                          }}
                        defaultValue={playerData.settings.consoleAllowed} 
                        className='bg-transparent'
                        name="consoleAllowed"
                        id="consoleAllowed">
                            <option className='bg-[#000000af] text-[#8392c5]' value={true}>True</option>
                            <option className='bg-[#000000af] text-[#8392c5]' value={false}>False</option>
                            <option className='bg-[#000000af] text-[#8392c5]' value={'default'}>Default</option>
                        </select>
                </div>

            </div>
                     

            <div className='flex flex-col w-full'>

                <div >
                        <label htmlFor='bedRestAllowed'>{playerProps[4]}</label>
                        <select 
                          onChange={e => {
                              playerData.settings.bedRestAllowed = e.target.value

                              setHasData(true);
                          }}
                        defaultValue={playerData.settings.bedRestAllowed} 
                        className='bg-transparent'
                        name="bedRestAllowed"
                        id="bedRestAllowed">
                            <option className='bg-[#000000af] text-[#8392c5]' value={true}>True</option>
                            <option className='bg-[#000000af] text-[#8392c5]' value={false}>False</option>
                            <option className='bg-[#000000af] text-[#8392c5]' value={'default'}>Default</option>
                        </select>
                </div>
                    
                <div >
                        <label htmlFor='wildernessRestAllowed'>{playerProps[5]}</label>
                        <select 
                          onChange={e => {
                              playerData.settings.wildernessRestAllowed = e.target.value

                              setHasData(true);
                          }}
                        defaultValue={playerData.settings.wildernessRestAllowed} 
                        className='bg-transparent'
                        name="wildernessRestAllowed"
                        id="wildernessRestAllowed">
                            <option className='bg-[#000000af] text-[#8392c5]' value={true}>True</option>
                            <option className='bg-[#000000af] text-[#8392c5]' value={false}>False</option>
                            <option className='bg-[#000000af] text-[#8392c5]' value={'default'}>Default</option>
                        </select>
                </div>
                
                <div >
                        <label htmlFor='waitAllowed'>{playerProps[6]}</label>
                        <select 
                          onChange={e => {
                              playerData.settings.waitAllowed = e.target.value

                              setHasData(true);
                          }}
                        defaultValue={playerData.settings.waitAllowed} 
                        className='bg-transparent'
                        name="waitAllowed"
                        id="waitAllowed">
                            <option className='bg-[#000000af] text-[#8392c5]' value={true}>True</option>
                            <option className='bg-[#000000af] text-[#8392c5]' value={false}>False</option>
                            <option className='bg-[#000000af] text-[#8392c5]' value={'default'}>Default</option>
                        </select>
                </div>
                    
                  
                <div>
                        <label htmlFor='staffRank'>{playerProps[7]}</label>
                        <select onChange={e => {
                          playerData.settings.staffRank = +e.target.value

                          setHasData(true);
                        }}
                        defaultValue={playerData.settings.staffRank} className='bg-transparent'
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

       { hasData && <button type='button' className='self-start border-2 px-2 py-1 border-[#ecce24da]' onClick={() => {handleSettingsChange()}}>Save Changes</button> }
        
    </div>

  )
}

export default Properties
