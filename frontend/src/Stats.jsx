import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from './DataContext';

const Stats = () => {

    const [playerData, setPlayerData] = useContext(DataContext);
    const [healthCurrent, setHealthCurrent] = useState();
    const [healthBase, setHealthBase] = useState();
    const [magickaCurrent, setMagickaCurrent] = useState();
    const [magickaBase, setMagickaBase] = useState();
    const [fatigueCurrent, setFatigueCurrent] = useState();
    const [fatigueBase, setFatigueBase] = useState();
    const [level, setLevel] = useState();
    const [levelProgress, setLevelProgress] = useState();

    useEffect(() => {
        const data = playerData.stats
        setStats(data);                        
    }, [])

    const setStats = (data) => {
        setHealthBase(Math.floor(data.healthBase));
        setHealthCurrent(Math.floor(data.healthCurrent));
        setMagickaBase(Math.floor(data.magickaBase));
        setMagickaCurrent(Math.floor(data.magickaCurrent));
        setFatigueBase(Math.floor(data.fatigueBase));
        setFatigueCurrent(Math.floor(data.fatigueCurrent));
        setLevel(Math.floor(data.level));
        setLevelProgress(Math.floor(data.levelProgress));
    }

   
   
    return (
        <>
            <div className="flex w-full flex-col">
                <div className='font-bold text-xl'>Stats</div>
                <div>Level: {level}</div>
                <div>Level Progress: {levelProgress} / 100</div>
                <div>Health: {healthCurrent} / {healthBase}</div>
                <div>Magicka: {magickaCurrent} / {magickaBase}</div>
                <div>Fatigue: {fatigueCurrent} / {fatigueBase}</div>
            </div>
        </>
    )
}

export default Stats
