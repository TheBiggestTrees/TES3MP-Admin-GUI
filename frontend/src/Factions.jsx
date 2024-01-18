import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from './DataContext';
import axios from 'axios';

const Factions = ({ host }) => {

    const [playerData, setPlayerData] = useContext(DataContext);
    const [factions, setFactions] = useState();
 
    const handleJoin = (guild) => {

        if(playerData.clientVariables.globals.expmagesguild) {
            delete playerData.clientVariables.globals.expmagesguild;
        };

        delete playerData.factionExpulsion[guild]; 

        axios.put(`${host}/factions`, playerData)
        .then(res => {
            setPlayerData(res.data);
        })
    }


    return (
        <>
        <div className="flex flex-col w-full">
            <div className='font-bold w-full text-xl border-[#ecce24b4] border-b-2 mb-4'>Faction Expulsions</div>
            {Object.keys(playerData.factionExpulsion).length === 0 ? <div className='self-center text-[#8b9cd3]'>No Expulsions</div> :
            <div className='flex flex-col md:flex-row justify-around'>
                {playerData.factionExpulsion['mages guild'] && 
                <div className='flex items-center gap-2'>
                    <span>Mage's Guild</span>
                    <button className='font-normal text-[#8b9cd3] text-base border-2 px-2 py-1 border-[#ecce24da]' onClick={() => handleJoin('mages guild')}>Re-join Guild</button>
                </div>}
                {playerData.factionExpulsion['fighters guild'] && 
                <div className='flex items-center gap-2'>
                    <span>Fighter's Guild</span>
                    <button className='font-normal text-[#8b9cd3] text-base border-2 px-2 py-1 border-[#ecce24da]' onClick={() => handleJoin('fighters guild')}>Re-join Guild</button>
                </div> }
            </div> }
        </div>
        </>
    )

}

export default Factions