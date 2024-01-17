import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from './DataContext';

const Attributes = () => {

  const [playerData, setPlayerData] = useContext(DataContext);
  const [attributes, setAttributes] = useState(Object.values(playerData.attributes));
  const [hasData, setHasData] = useState(false);

  return (
    <>

      <div className="flex flex-col w-full gap-2">

        <div className='font-bold text-xl flex justify-between'>
          <span className='pb-2'>Attributes</span>
          {hasData && <button type='button' className='font-normal text-base border-2 px-2 py-1 border-[#ecce24da]' onClick={() => {handleSettingsChange()}}>Save Changes</button>}
          </div>

        <div>
          <div className='font-bold text-[#8b9cd3] text-md border-b-2 border-[#ecce24b4]'>Strength</div>
          <div className="flex flex-col w-4/5">
            <label htmlFor='strengthBase' className='font-bold pt-2 flex'>
              <span className="pr-2">Level:</span>
              <input id='strengthBase' type="number" className='bg-transparent  text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                playerData.attributes.Strength.base = e.target.value;
                setHasData(true);
              }}
                placeholder={Math.floor(playerData.attributes.Strength.base)}>
              </input>
            </label>

            <label htmlFor='strengthDamage' className='font-bold pt-2 flex'>
              <span className="pr-2 text-md font-normal">Reduction:</span>
              <input id='strengthDamage' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                playerData.attributes.Strength.damage = e.target.value;
                setHasData(true);
              }}
                placeholder={Math.floor(playerData.attributes.Strength.damage)}>
              </input>
            </label>

            <label htmlFor='strengthIncrease' className='font-bold pt-2 pb-4 flex'>
              <span className="pr-2 text-md font-normal">Progress: </span>
              <input id='strengthIncrease' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                playerData.attributes.Strength.skillIncrease = e.target.value;
                setHasData(true);
              }}
                placeholder={Math.floor(playerData.attributes.Strength.skillIncrease)}>
              </input>
            </label>

          </div>
        </div>

        <div>
          <div className='font-bold text-[#8b9cd3] text-md border-b-2 border-[#ecce24b4]'>Agility</div>
          <div className="flex flex-col w-4/5">
            <label htmlFor='agilityBase' className='font-bold pt-2 flex'>
              <span className="pr-2">Level:</span>
              <input id='agilityBase' type="number" className='bg-transparent  text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                playerData.attributes.Agility.base = e.target.value;
                setHasData(true);
              }}
                placeholder={Math.floor(playerData.attributes.Agility.base)}>
              </input>
            </label>

            <label htmlFor='agilityDamage' className='font-bold pt-2 flex'>
              <span className="pr-2 text-md font-normal">Reduction:</span>
              <input id='agilityDamage' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                playerData.attributes.Agility.damage = e.target.value;
                setHasData(true);
              }}
                placeholder={Math.floor(playerData.attributes.Agility.damage)}>
              </input>
            </label>

            <label htmlFor='agilityIncrease' className='font-bold pt-2 pb-4 flex'>
              <span className="pr-2 text-md font-normal">Progress: </span>
              <input id='agilityIncrease' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                playerData.attributes.Agility.skillIncrease = e.target.value;
                setHasData(true);
              }}
                placeholder={Math.floor(playerData.attributes.Agility.skillIncrease)}>
              </input>
            </label>

          </div>
        </div>

        <div>
          <div className='font-bold text-[#8b9cd3] text-md border-b-2 border-[#ecce24b4]'>Luck</div>
          <div className="flex flex-col w-4/5">
            <label htmlFor='luckBase' className='font-bold pt-2 flex'>
              <span className="pr-2">Level:</span>
              <input id='luckBase' type="number" className='bg-transparent  text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                playerData.attributes.Luck.base = e.target.value;
                setHasData(true);
              }}
                placeholder={Math.floor(playerData.attributes.Luck.base)}>
              </input>
            </label>

            <label htmlFor='luckDamage' className='font-bold pt-2 flex'>
              <span className="pr-2 text-md font-normal">Reduction:</span>
              <input id='luckDamage' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                playerData.attributes.Luck.damage = e.target.value;
                setHasData(true);
              }}
                placeholder={Math.floor(playerData.attributes.Luck.damage)}>
              </input>
            </label>

            <label htmlFor='luckIncrease' className='font-bold pt-2 pb-4 flex'>
              <span className="pr-2 text-md font-normal">Progress: </span>
              <input id='luckIncrease' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                playerData.attributes.Luck.skillIncrease = e.target.value;
                setHasData(true);
              }}
                placeholder={Math.floor(playerData.attributes.Luck.skillIncrease)}>
              </input>
            </label>
          </div>
        </div>

        <div>
          <div className='font-bold text-[#8b9cd3] text-md border-b-2 border-[#ecce24b4]'>Speed</div>
          <div className="flex flex-col w-4/5">
            <label htmlFor='speedBase' className='font-bold pt-2 flex'>
              <span className="pr-2">Level:</span>
              <input id='speedBase' type="number" className='bg-transparent  text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                playerData.attributes.Speed.base = e.target.value;
                setHasData(true);
              }}
                placeholder={Math.floor(playerData.attributes.Speed.base)}>
              </input>
            </label>

            <label htmlFor='speedDamage' className='font-bold pt-2 flex'>
              <span className="pr-2 text-md font-normal">Reduction:</span>
              <input id='speedDamage' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                playerData.attributes.Speed.damage = e.target.value;
                setHasData(true);
              }}
                placeholder={Math.floor(playerData.attributes.Speed.damage)}>
              </input>
            </label>

            <label htmlFor='speedIncrease' className='font-bold pt-2 pb-4 flex'>
              <span className="pr-2 text-md font-normal">Progress: </span>
              <input id='speedIncrease' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                playerData.attributes.Speed.skillIncrease = e.target.value;
                setHasData(true);
              }}
                placeholder={Math.floor(playerData.attributes.Speed.skillIncrease)}>
              </input>
            </label>
          </div>
        </div>

        <div>
          <div className='font-bold text-[#8b9cd3] text-md border-b-2 border-[#ecce24b4]'>Personality</div>
          <div className="flex flex-col w-4/5">
            <label htmlFor='PersonalityBase' className='font-bold pt-2 flex'>
              <span className="pr-2">Level:</span>
              <input id='PersonalityBase' type="number" className='bg-transparent  text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                playerData.attributes.Personality.base = e.target.value;
                setHasData(true);
              }}
                placeholder={Math.floor(playerData.attributes.Personality.base)}>
              </input>
            </label>

            <label htmlFor='PersonalityDamage' className='font-bold pt-2 flex'>
              <span className="pr-2 text-md font-normal">Reduction:</span>
              <input id='PersonalityDamage' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                playerData.attributes.Personality.damage = e.target.value;
                setHasData(true);
              }}
                placeholder={Math.floor(playerData.attributes.Personality.damage)}>
              </input>
            </label>

            <label htmlFor='PersonalityIncrease' className='font-bold pt-2 pb-4 flex'>
              <span className="pr-2 text-md font-normal">Progress: </span>
              <input id='PersonalityIncrease' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                playerData.attributes.Personality.skillIncrease = e.target.value;
                setHasData(true);
              }}
                placeholder={Math.floor(playerData.attributes.Personality.skillIncrease)}>
              </input>
            </label>
          </div>
        </div>

        <div>
          <div className='font-bold text-[#8b9cd3] text-md border-b-2 border-[#ecce24b4]'>Endurance</div>
          <div className="flex flex-col w-4/5">
            <label htmlFor='EnduranceBase' className='font-bold pt-2 flex'>
              <span className="pr-2">Level:</span>
              <input id='EnduranceBase' type="number" className='bg-transparent  text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                playerData.attributes.Endurance.base = e.target.value;
                setHasData(true);
              }}
                placeholder={Math.floor(playerData.attributes.Endurance.base)}>
              </input>
            </label>

            <label htmlFor='EnduranceDamage' className='font-bold pt-2 flex'>
              <span className="pr-2 text-md font-normal">Reduction:</span>
              <input id='EnduranceDamage' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                playerData.attributes.Endurance.damage = e.target.value;
                setHasData(true);
              }}
                placeholder={Math.floor(playerData.attributes.Endurance.damage)}>
              </input>
            </label>

            <label htmlFor='EnduranceIncrease' className='font-bold pt-2 pb-4 flex'>
              <span className="pr-2 text-md font-normal">Progress: </span>
              <input id='EnduranceIncrease' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                playerData.attributes.Endurance.skillIncrease = e.target.value;
                setHasData(true);
              }}
                placeholder={Math.floor(playerData.attributes.Endurance.skillIncrease)}>
              </input>
            </label>
          </div>
        </div>

        <div>
          <div className='font-bold text-[#8b9cd3] text-md border-b-2 border-[#ecce24b4]'>Intelligence</div>
          <div className="flex flex-col w-4/5">
            <label htmlFor='IntelligenceBase' className='font-bold pt-2 flex'>
              <span className="pr-2">Level:</span>
              <input id='IntelligenceBase' type="number" className='bg-transparent  text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                playerData.attributes.Intelligence.base = e.target.value;
                setHasData(true);
              }}
                placeholder={Math.floor(playerData.attributes.Intelligence.base)}>
              </input>
            </label>

            <label htmlFor='IntelligenceDamage' className='font-bold pt-2 flex'>
              <span className="pr-2 text-md font-normal">Reduction:</span>
              <input id='IntelligenceDamage' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                playerData.attributes.Intelligence.damage = e.target.value;
                setHasData(true);
              }}
                placeholder={Math.floor(playerData.attributes.Intelligence.damage)}>
              </input>
            </label>

            <label htmlFor='IntelligenceIncrease' className='font-bold pt-2 pb-4 flex'>
              <span className="pr-2 text-md font-normal">Progress: </span>
              <input id='IntelligenceIncrease' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                playerData.attributes.Intelligence.skillIncrease = e.target.value;
                setHasData(true);
              }}
                placeholder={Math.floor(playerData.attributes.Intelligence.skillIncrease)}>
              </input>
            </label>
          </div>
        </div>

        <div>
          <div className='font-bold text-[#8b9cd3] text-md border-b-2 border-[#ecce24b4]'>Willpower</div>
          <div className="flex flex-col w-4/5">
            <label htmlFor='WillpowerBase' className='font-bold pt-2 flex'>
              <span className="pr-2">Level:</span>
              <input id='WillpowerBase' type="number" className='bg-transparent  text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                playerData.attributes.Willpower.base = e.target.value;
                setHasData(true);
              }}
                placeholder={Math.floor(playerData.attributes.Willpower.base)}>
              </input>
            </label>

            <label htmlFor='WillpowerDamage' className='font-bold pt-2 flex'>
              <span className="pr-2 text-md font-normal">Reduction:</span>
              <input id='WillpowerDamage' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                playerData.attributes.Willpower.damage = e.target.value;
                setHasData(true);
              }}
                placeholder={Math.floor(playerData.attributes.Willpower.damage)}>
              </input>
            </label>

            <label htmlFor='WillpowerIncrease' className='font-bold pt-2 pb-4 flex'>
              <span className="pr-2 text-md font-normal">Progress: </span>
              <input id='WillpowerIncrease' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                playerData.attributes.Willpower.skillIncrease = e.target.value;
                setHasData(true);
              }}
                placeholder={Math.floor(playerData.attributes.Willpower.skillIncrease)}>
              </input>
            </label>
          </div>
        </div>

      </div>


    </>
  )
}

export default Attributes
