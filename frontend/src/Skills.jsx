import React, { useContext, useState } from 'react'
import { DataContext } from './DataContext';

const Skills = () => {

    const [playerData, setPlayerData] = useContext(DataContext);
  
  return (
    <>
        <div>
            {playerData.skills.map((item, id) => {
                <div key={id}>
                    {item}
                </div>
            })}
        
        </div>
    </>
  )
}

export default Skills
