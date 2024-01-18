import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from './DataContext';
import axios from 'axios';

const Factions = () => {

    const [playerData, setPlayerData] = useContext(DataContext);
    const [factions, setFactions] = useState({});
    const [hasData, setHasData] = useState(false);

    const handleSettingsChange = () => {

        axios.put(`${host}/expulsions`, expulsions)
        .then(res => {

            setHasData(false);
        })

    }

    return (
        <>
        </>
    )

}

export default Factions