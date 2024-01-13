import React, { useContext, useState } from 'react'
import { DataContext } from './DataContext';

const Skills = () => {

    const [playerData, setPlayerData] = useContext(DataContext);
    const [skills, setSkills] = useState(Object.values(playerData.skills));

    return (
        <>

        <div className="flex flex-col w-full">
            <div className='font-bold text-lg'>Skills</div>
                {skills.map((item, index) => {
                return (
                    <div key={index}>
            
                            <div className='font-bold text-[#8b9cd3] text-md border-b-2 border-[#ecce24b4]'>{Object.keys(playerData.skills)[index]}</div>
                            <div className='font-bold'>
                                Level: {Math.floor(item.base)}
                            </div>
                            <div>
                                Skill Reduction: {Math.floor(item.damage)}
                            </div>
                            <div>
                                Skill Progress: {Math.floor(item.progress)}
                            </div>
            
                    </div>
                    )
            
            })}
        </div>

        </>
    )
    
    
  
}

export default Skills
