import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from './DataContext';
import axios from 'axios';

const Stats = ({ host }) => {

    const [playerData, setPlayerData] = useContext(DataContext);
    const [hasData, setHasData] = useState(false);

    const handleSettingsChange = () => {
        axios.put(`${host}/statsChange`, playerData.stats)
        .then(res => {
            playerData.stats = res.data.stats
            console.log(playerData.stats)
            setHasData(false);
        })
    }

    return (
        <>
            <div className="flex w-full flex-col gap-1">
            
                <div className='font-bold text-xl'>Stats</div>             
                
                <div className='flex gap-2'>
                    <span>Level:</span>
                    <input className='bg-transparent w-10 text-center text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' type="number" placeholder={playerData.stats.level} onChange={e => {
                        playerData.stats.level = +e.target.value;
                        setHasData(true);
                    }}></input>
                </div>

                <div className='flex gap-2'>
                    <span>Level Progress: </span>
                    <div>
                        <input className='bg-transparent w-10 text-center text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' type="number" placeholder={Math.floor(playerData.stats.levelProgress)} onChange={e => {
                            playerData.stats.levelProgress = +e.target.value;
                            setHasData(true);
                        }} />
                         <span> / 100</span>
                    </div>
                </div>

                <div>
                    <span>Health:</span>
                    <input className='bg-transparent w-10 text-center text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' type="number" placeholder={Math.floor(playerData.stats.healthCurrent)} onChange={e => {
                            playerData.stats.healthCurrent = +e.target.value;
                            setHasData(true);
                        }}/>
                    <span> / </span>
                    <input className='bg-transparent w-10 text-center text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' type="number" placeholder={Math.floor(playerData.stats.healthBase)} onChange={e => {
                            playerData.stats.healthBase = +e.target.value;
                            setHasData(true);
                        }} /> 
                </div>

                <div>
                    <span>Magicka:</span>
                    <input className='bg-transparent w-10 text-center text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' type="number" placeholder={Math.floor(playerData.stats.magickaCurrent)} onChange={e => {
                            playerData.stats.magickaCurrent = +e.target.value;
                            setHasData(true);
                        }}/>
                    <span> / </span>
                    <input className='bg-transparent w-10 text-center text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' type="number" placeholder={Math.floor(playerData.stats.magickaBase)} onChange={e => {
                            playerData.stats.magickaBase = +e.target.value;
                            setHasData(true);
                        }} /> 
                </div>

                <div>
                    <span>Fatigue:</span>
                    <input className='bg-transparent w-10 text-center text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' type="number" placeholder={Math.floor(playerData.stats.fatigueCurrent)} onChange={e => {
                            playerData.stats.fatigueCurrent = +e.target.value;
                            setHasData(true);
                        }}/>
                    <span> / </span>
                    <input className='bg-transparent w-10 text-center text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' type="number" placeholder={Math.floor(playerData.stats.fatigueBase)} onChange={e => {
                            playerData.stats.fatigueBase = +e.target.value;
                            setHasData(true);
                        }} /> 
                </div>

                {hasData && <button type='button' className='font-normal self-start text-base border-2 px-2 py-1 border-[#ecce24da]' onClick={() => {handleSettingsChange()}}>Save Changes</button>}
            </div>
        </>
    )
}

export default Stats
