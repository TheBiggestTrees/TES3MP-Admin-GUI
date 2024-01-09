import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Stats = ({host}) => {

    const [healthCurrent, setHealthCurrent] = useState();
    const [healthBase, setHealthBase] = useState();
    const [magickaCurrent, setMagickaCurrent] = useState();
    const [magickaBase, setMagickaBase] = useState();
    const [fatigueCurrent, setFatigueCurrent] = useState();
    const [fatigueBase, setFatigueBase] = useState();
    const [level, setLevel] = useState();
    const [levelProgress, setLevelProgress] = useState();


    function setStats(data) {
        setHealthBase(data.healthBase);
        setHealthCurrent(data.healthCurrent);
        setMagickaBase(data.magickaBase);
        setMagickaCurrent(data.magickaCurrent);
        setFatigueBase(data.fatigueBase);
        setFatigueCurrent(data.fatigueCurrent);
        setLevel(data.level);
        setLevelProgress(data.levelProgress);
    }

    axios.get(`${host}/`)
    .then(res => {
        const data = res.data.stats;
        setStats(data);                   
    })
        
   
    return (
        <>
            <div className='font-bold text-xl'>Stats</div>
            <div>Level: {level}</div>
            <div>Level Progress: {levelProgress} / 100</div>
            <div>Health: {healthCurrent} / {healthBase}</div>
            <div>Magicka: {magickaCurrent} / {magickaBase}</div>
            <div>Fatigue: {fatigueCurrent} / {fatigueBase}</div>
        </>
    )
}

export default Stats
