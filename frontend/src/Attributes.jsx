import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Attributes = ({ host }) => {

  const [strength, setStrength] = useState([]);
  const [agility, setAgility] = useState([]);
  const [willpower, setWillpower] = useState([]);
  const [speed, setSpeed] = useState([]);
  const [intelligence, setIntelligence] = useState([]);
  const [endurance, setEndurance] = useState([]);
  const [luck, setLuck] = useState([]);
  const [personality, setPersonality] = useState([]);

  useEffect(() => {
    axios.get(`${host}/`)
      .then((res) => {
        const data = res.data.attributes;

        for (const key in data) {
          switch (key) {
            case 'Strength':
              setStrength([data.Strength.base, data.Strength.damage, data.Strength.skillIncrease]);
              break;

            case 'Agility':
              setAgility([data.Agility.base, data.Agility.damage, data.Agility.skillIncrease]);
              break;

            case 'Willpower':
              setWillpower([data.Willpower.base, data.Willpower.damage, data.Willpower.skillIncrease]);
              break;

            case 'Speed':
              setSpeed([data.Speed.base, data.Speed.damage, data.Speed.skillIncrease]);
              break;

            case 'Intelligence':
              setIntelligence([data.Intelligence.base, data.Intelligence.damage, data.Intelligence.skillIncrease]);
              break;

            case 'Endurance':
              setEndurance([data.Endurance.base, data.Endurance.damage, data.Endurance.skillIncrease]);
              break;

            case 'Luck':
              setLuck([data.Luck.base, data.Luck.damage, data.Luck.skillIncrease]);
              break;

            case 'Personality':
              setPersonality([data.Personality.base, data.Personality.damage, data.Personality.skillIncrease]);
              break;

            default:
              break;
          }
        }

      })
  }, [])

  return (
    <>

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


    </>
  )
}

export default Attributes
