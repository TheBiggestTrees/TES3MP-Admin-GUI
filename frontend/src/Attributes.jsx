import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from './DataContext';

const Attributes = () => {

  const [playerData, setPlayerData] = useContext(DataContext);
  const [strength, setStrength] = useState([]);
  const [agility, setAgility] = useState([]);
  const [willpower, setWillpower] = useState([]);
  const [speed, setSpeed] = useState([]);
  const [intelligence, setIntelligence] = useState([]);
  const [endurance, setEndurance] = useState([]);
  const [luck, setLuck] = useState([]);
  const [personality, setPersonality] = useState([]);

  useEffect(() => {
    
    const playerDataAtr = playerData.attributes

        for (const key in playerDataAtr) {
          switch (key) {
            case 'Strength':
              setStrength([playerDataAtr.Strength.base, playerDataAtr.Strength.damage, playerDataAtr.Strength.skillIncrease]);
              break;

            case 'Agility':
              setAgility([playerDataAtr.Agility.base, playerDataAtr.Agility.damage, playerDataAtr.Agility.skillIncrease]);
              break;

            case 'Willpower':
              setWillpower([playerDataAtr.Willpower.base, playerDataAtr.Willpower.damage, playerDataAtr.Willpower.skillIncrease]);
              break;

            case 'Speed':
              setSpeed([playerDataAtr.Speed.base, playerDataAtr.Speed.damage, playerDataAtr.Speed.skillIncrease]);
              break;

            case 'Intelligence':
              setIntelligence([playerDataAtr.Intelligence.base, playerDataAtr.Intelligence.damage, playerDataAtr.Intelligence.skillIncrease]);
              break;

            case 'Endurance':
              setEndurance([playerDataAtr.Endurance.base, playerDataAtr.Endurance.damage, playerDataAtr.Endurance.skillIncrease]);
              break;

            case 'Luck':
              setLuck([playerDataAtr.Luck.base, playerDataAtr.Luck.damage, playerDataAtr.Luck.skillIncrease]);
              break;

            case 'Personality':
              setPersonality([playerDataAtr.Personality.base, playerDataAtr.Personality.damage, playerDataAtr.Personality.skillIncrease]);
              break;

            default:
              break;
          }
        }

      }, [])

  return (
    <>

      <div className="flex flex-col w-full">
        <div className='font-bold text-xl'>Attributes</div>
        <div>
          <div className='font-bold text-[#8b9cd3] text-md border-b-2 border-[#ecce24b4]'>Strength</div>
          <div className='font-bold'>Level: {strength[0]}</div>
          <div>Attribute Reduction: {strength[1]}</div>
          <div>Attribute Level Progress: {strength[2]}</div>
        </div>
        <div>
          <div className='font-bold text-[#8b9cd3] text-md border-b-2 border-[#ecce24b4]'>Agility</div>
          <div className='font-bold'>Level: {agility[0]}</div>
          <div>Attribute Reduction: {agility[1]}</div>
          <div>Attribute Level Progress: {agility[2]}</div>
        </div>
        <div>
          <div className='font-bold text-[#8b9cd3] text-md border-b-2 border-[#ecce24b4]'>Willpower</div>
          <div className='font-bold'>Level: {willpower[0]}</div>
          <div>Attribute Reduction: {willpower[1]}</div>
          <div>Attribute Level Progress: {willpower[2]}</div>
        </div>
        <div>
          <div className='font-bold text-[#8b9cd3] text-md border-b-2 border-[#ecce24b4]'>Speed</div>
          <div className='font-bold'>Level: {speed[0]}</div>
          <div>Attribute Reduction: {speed[1]}</div>
          <div>Attribute Level Progress: {speed[2]}</div>
        </div>
        <div>
          <div className='font-bold text-[#8b9cd3] text-md border-b-2 border-[#ecce24b4]'>Intelligence</div>
          <div className='font-bold'>Level: {intelligence[0]}</div>
          <div>Attribute Reduction: {intelligence[1]}</div>
          <div>Attribute Level Progress: {intelligence[2]}</div>
        </div>
        <div>
          <div className='font-bold text-[#8b9cd3] text-md border-b-2 border-[#ecce24b4]'>Endurance</div>
          <div className='font-bold'>Level: {endurance[0]}</div>
          <div>Attribute Reduction: {endurance[1]}</div>
          <div>Attribute Level Progress: {endurance[2]}</div>
        </div>
        <div>
          <div className='font-bold text-[#8b9cd3] text-md border-b-2 border-[#ecce24b4]'>Luck</div>
          <div className='font-bold'>Level: {luck[0]}</div>
          <div>Attribute Reduction: {luck[1]}</div>
          <div>Attribute Level Progress: {luck[2]}</div>
        </div>
        <div>
          <div className='font-bold text-[#8b9cd3] text-md border-b-2 border-[#ecce24b4]'>Personality</div>
          <div className='font-bold'>Level: {personality[0]}</div>
          <div>Attribute Reduction: {personality[1]}</div>
          <div>Attribute Level Progress: {personality[2]}</div>
        </div>
      </div>


    </>
  )
}

export default Attributes
