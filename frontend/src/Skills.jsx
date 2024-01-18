import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from './DataContext';
import axios from 'axios';

const Skills = ({ host }) => {

    const [playerData, setPlayerData] = useContext(DataContext);
    const [hasData, setHasData] = useState(false);
    const [originalData, setOriginalData] = useState(JSON.parse(JSON.stringify(playerData.skills)));

    const handleSettingsChange = () => {
        axios.put(`${host}/skillsChange`, playerData.skills)
        .then(res => {
            playerData.skills = res.data.skills;
            setHasData(false);
        })
    }

    return (
        <>

            <div className="flex flex-col w-full">
                <div className='font-bold text-xl flex justify-between'>
                    <div className='font-bold text-lg '>Skills</div>
                    {hasData && <button type='button' className='font-normal text-base border-2 px-2 py-1 border-[#ecce24da]' onClick={() => handleSettingsChange() }>Save Changes</button>}
                </div>

                <div className='pt-3'>
                    <div className='font-bold text-[#8b9cd3] text-md border-b-2 border-[#ecce24b4]'>Block</div>
                    <div className="flex flex-col w-4/5">
                        <label htmlFor='BlockBase' className='font-bold pt-2 flex'>
                            <span className="pr-2">Level:</span>
                            <input id='BlockBase' type="number" className='bg-transparent  text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Block.base = +e.target.value;
                                setHasData(true);                               
                            }}
                                placeholder={Math.floor(originalData.Block.base)}>
                            </input>
                        </label>

                        <label htmlFor='BlockDamage' className='font-bold pt-2 flex'>
                            <span className="pr-2 text-md font-normal">Reduction:</span>
                            <input id='BlockDamage' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Block.damage = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Block.damage)}>
                            </input>
                        </label>

                        <label htmlFor='BlockIncrease' className='font-bold pt-2 pb-4 flex'>
                            <span className="pr-2 text-md font-normal">Progress: </span>
                            <input id='BlockIncrease' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Block.progress = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Block.progress)}>
                            </input>
                        </label>

                    </div>
                </div>

                <div className='pt-3'>
                    <div className='font-bold text-[#8b9cd3] text-md border-b-2 border-[#ecce24b4]'>Alchemy</div>
                    <div className="flex flex-col w-4/5">
                        <label htmlFor='AlchemyBase' className='font-bold pt-2 flex'>
                            <span className="pr-2">Level:</span>
                            <input id='AlchemyBase' type="number" className='bg-transparent  text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Alchemy.base = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Alchemy.base)}>
                            </input>
                        </label>

                        <label htmlFor='AlchemyDamage' className='font-bold pt-2 flex'>
                            <span className="pr-2 text-md font-normal">Reduction:</span>
                            <input id='AlchemyDamage' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Alchemy.damage = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Alchemy.damage)}>
                            </input>
                        </label>

                        <label htmlFor='AlchemyIncrease' className='font-bold pt-2 pb-4 flex'>
                            <span className="pr-2 text-md font-normal">Progress: </span>
                            <input id='AlchemyIncrease' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Alchemy.progress = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Alchemy.progress)}>
                            </input>
                        </label>

                    </div>
                </div>

                <div className='pt-3'>
                    <div className='font-bold text-[#8b9cd3] text-md border-b-2 border-[#ecce24b4]'>Restoration</div>
                    <div className="flex flex-col w-4/5">
                        <label htmlFor='RestorationBase' className='font-bold pt-2 flex'>
                            <span className="pr-2">Level:</span>
                            <input id='RestorationBase' type="number" className='bg-transparent  text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Restoration.base = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Restoration.base)}>
                            </input>
                        </label>

                        <label htmlFor='RestorationDamage' className='font-bold pt-2 flex'>
                            <span className="pr-2 text-md font-normal">Reduction:</span>
                            <input id='RestorationDamage' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Restoration.damage = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Restoration.damage)}>
                            </input>
                        </label>

                        <label htmlFor='RestorationIncrease' className='font-bold pt-2 pb-4 flex'>
                            <span className="pr-2 text-md font-normal">Progress: </span>
                            <input id='RestorationIncrease' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Restoration.progress = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Restoration.progress)}>
                            </input>
                        </label>

                    </div>
                </div>

                <div className='pt-3'>
                    <div className='font-bold text-[#8b9cd3] text-md border-b-2 border-[#ecce24b4]'>Conjuration</div>
                    <div className="flex flex-col w-4/5">
                        <label htmlFor='ConjurationBase' className='font-bold pt-2 flex'>
                            <span className="pr-2">Level:</span>
                            <input id='ConjurationBase' type="number" className='bg-transparent  text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Conjuration.base = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Conjuration.base)}>
                            </input>
                        </label>

                        <label htmlFor='ConjurationDamage' className='font-bold pt-2 flex'>
                            <span className="pr-2 text-md font-normal">Reduction:</span>
                            <input id='ConjurationDamage' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Conjuration.damage = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Conjuration.damage)}>
                            </input>
                        </label>

                        <label htmlFor='ConjurationIncrease' className='font-bold pt-2 pb-4 flex'>
                            <span className="pr-2 text-md font-normal">Progress: </span>
                            <input id='ConjurationIncrease' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Conjuration.progress = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Conjuration.progress)}>
                            </input>
                        </label>

                    </div>
                </div>

                <div className='pt-3'>
                    <div className='font-bold text-[#8b9cd3] text-md border-b-2 border-[#ecce24b4]'>Hand to Hand</div>
                    <div className="flex flex-col w-4/5">
                        <label htmlFor='HandtohandBase' className='font-bold pt-2 flex'>
                            <span className="pr-2">Level:</span>
                            <input id='HandtohandBase' type="number" className='bg-transparent  text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Handtohand.base = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Handtohand.base)}>
                            </input>
                        </label>

                        <label htmlFor='HandtohandDamage' className='font-bold pt-2 flex'>
                            <span className="pr-2 text-md font-normal">Reduction:</span>
                            <input id='HandtohandDamage' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Handtohand.damage = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Handtohand.damage)}>
                            </input>
                        </label>

                        <label htmlFor='HandtohandIncrease' className='font-bold pt-2 pb-4 flex'>
                            <span className="pr-2 text-md font-normal">Progress: </span>
                            <input id='HandtohandIncrease' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Handtohand.progress = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Handtohand.progress)}>
                            </input>
                        </label>

                    </div>
                </div>

                <div className='pt-3'>
                    <div className='font-bold text-[#8b9cd3] text-md border-b-2 border-[#ecce24b4]'>Medium Armor</div>
                    <div className="flex flex-col w-4/5">
                        <label htmlFor='MediumarmorBase' className='font-bold pt-2 flex'>
                            <span className="pr-2">Level:</span>
                            <input id='MediumarmorBase' type="number" className='bg-transparent  text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Mediumarmor.base = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Mediumarmor.base)}>
                            </input>
                        </label>

                        <label htmlFor='MediumarmorDamage' className='font-bold pt-2 flex'>
                            <span className="pr-2 text-md font-normal">Reduction:</span>
                            <input id='MediumarmorDamage' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Mediumarmor.damage = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Mediumarmor.damage)}>
                            </input>
                        </label>

                        <label htmlFor='MediumarmorIncrease' className='font-bold pt-2 pb-4 flex'>
                            <span className="pr-2 text-md font-normal">Progress: </span>
                            <input id='MediumarmorIncrease' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Mediumarmor.progress = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Mediumarmor.progress)}>
                            </input>
                        </label>

                    </div>
                </div>

                <div className='pt-3'>
                    <div className='font-bold text-[#8b9cd3] text-md border-b-2 border-[#ecce24b4]'>Alteration</div>
                    <div className="flex flex-col w-4/5">
                        <label htmlFor='AlterationBase' className='font-bold pt-2 flex'>
                            <span className="pr-2">Level:</span>
                            <input id='AlterationBase' type="number" className='bg-transparent  text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Alteration.base = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Alteration.base)}>
                            </input>
                        </label>

                        <label htmlFor='AlterationDamage' className='font-bold pt-2 flex'>
                            <span className="pr-2 text-md font-normal">Reduction:</span>
                            <input id='AlterationDamage' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Alteration.damage = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Alteration.damage)}>
                            </input>
                        </label>

                        <label htmlFor='AlterationIncrease' className='font-bold pt-2 pb-4 flex'>
                            <span className="pr-2 text-md font-normal">Progress: </span>
                            <input id='AlterationIncrease' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Alteration.progress = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Alteration.progress)}>
                            </input>
                        </label>

                    </div>
                </div>

                <div className='pt-3'>
                    <div className='font-bold text-[#8b9cd3] text-md border-b-2 border-[#ecce24b4]'>Heavy Armor</div>
                    <div className="flex flex-col w-4/5">
                        <label htmlFor='HeavyarmorBase' className='font-bold pt-2 flex'>
                            <span className="pr-2">Level:</span>
                            <input id='HeavyarmorBase' type="number" className='bg-transparent  text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Heavyarmor.base = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Heavyarmor.base)}>
                            </input>
                        </label>

                        <label htmlFor='HeavyarmorDamage' className='font-bold pt-2 flex'>
                            <span className="pr-2 text-md font-normal">Reduction:</span>
                            <input id='HeavyarmorDamage' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Heavyarmor.damage = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Heavyarmor.damage)}>
                            </input>
                        </label>

                        <label htmlFor='HeavyarmorIncrease' className='font-bold pt-2 pb-4 flex'>
                            <span className="pr-2 text-md font-normal">Progress: </span>
                            <input id='HeavyarmorIncrease' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Heavyarmor.progress = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Heavyarmor.progress)}>
                            </input>
                        </label>

                    </div>
                </div>

                <div className='pt-3'>
                    <div className='font-bold text-[#8b9cd3] text-md border-b-2 border-[#ecce24b4]'>Mercantile</div>
                    <div className="flex flex-col w-4/5">
                        <label htmlFor='MercantileBase' className='font-bold pt-2 flex'>
                            <span className="pr-2">Level:</span>
                            <input id='MercantileBase' type="number" className='bg-transparent  text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Mercantile.base = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Mercantile.base)}>
                            </input>
                        </label>

                        <label htmlFor='MercantileDamage' className='font-bold pt-2 flex'>
                            <span className="pr-2 text-md font-normal">Reduction:</span>
                            <input id='MercantileDamage' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Mercantile.damage = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Mercantile.damage)}>
                            </input>
                        </label>

                        <label htmlFor='MercantileIncrease' className='font-bold pt-2 pb-4 flex'>
                            <span className="pr-2 text-md font-normal">Progress: </span>
                            <input id='MercantileIncrease' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Mercantile.progress = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Mercantile.progress)}>
                            </input>
                        </label>

                    </div>
                </div>

                <div className='pt-3'>
                    <div className='font-bold text-[#8b9cd3] text-md border-b-2 border-[#ecce24b4]'>Marksman</div>
                    <div className="flex flex-col w-4/5">
                        <label htmlFor='MarksmanBase' className='font-bold pt-2 flex'>
                            <span className="pr-2">Level:</span>
                            <input id='MarksmanBase' type="number" className='bg-transparent  text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Marksman.base = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Marksman.base)}>
                            </input>
                        </label>

                        <label htmlFor='MarksmanDamage' className='font-bold pt-2 flex'>
                            <span className="pr-2 text-md font-normal">Reduction:</span>
                            <input id='MarksmanDamage' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Marksman.damage = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Marksman.damage)}>
                            </input>
                        </label>

                        <label htmlFor='MarksmanIncrease' className='font-bold pt-2 pb-4 flex'>
                            <span className="pr-2 text-md font-normal">Progress: </span>
                            <input id='MarksmanIncrease' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Marksman.progress = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Marksman.progress)}>
                            </input>
                        </label>

                    </div>
                </div>

                <div className='pt-3'>
                    <div className='font-bold text-[#8b9cd3] text-md border-b-2 border-[#ecce24b4]'>Short Blade</div>
                    <div className="flex flex-col w-4/5">
                        <label htmlFor='ShortbladeBase' className='font-bold pt-2 flex'>
                            <span className="pr-2">Level:</span>
                            <input id='ShortbladeBase' type="number" className='bg-transparent  text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Shortblade.base = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Shortblade.base)}>
                            </input>
                        </label>

                        <label htmlFor='ShortbladeDamage' className='font-bold pt-2 flex'>
                            <span className="pr-2 text-md font-normal">Reduction:</span>
                            <input id='ShortbladeDamage' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Shortblade.damage = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Shortblade.damage)}>
                            </input>
                        </label>

                        <label htmlFor='ShortbladeIncrease' className='font-bold pt-2 pb-4 flex'>
                            <span className="pr-2 text-md font-normal">Progress: </span>
                            <input id='ShortbladeIncrease' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Shortblade.progress = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Shortblade.progress)}>
                            </input>
                        </label>

                    </div>
                </div>

                <div className='pt-3'>
                    <div className='font-bold text-[#8b9cd3] text-md border-b-2 border-[#ecce24b4]'>Sneak</div>
                    <div className="flex flex-col w-4/5">
                        <label htmlFor='SneakBase' className='font-bold pt-2 flex'>
                            <span className="pr-2">Level:</span>
                            <input id='SneakBase' type="number" className='bg-transparent  text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Sneak.base = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Sneak.base)}>
                            </input>
                        </label>

                        <label htmlFor='SneakDamage' className='font-bold pt-2 flex'>
                            <span className="pr-2 text-md font-normal">Reduction:</span>
                            <input id='SneakDamage' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Sneak.damage = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Sneak.damage)}>
                            </input>
                        </label>

                        <label htmlFor='SneakIncrease' className='font-bold pt-2 pb-4 flex'>
                            <span className="pr-2 text-md font-normal">Progress: </span>
                            <input id='SneakIncrease' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Sneak.progress = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Sneak.progress)}>
                            </input>
                        </label>

                    </div>
                </div>

                <div className='pt-3'>
                    <div className='font-bold text-[#8b9cd3] text-md border-b-2 border-[#ecce24b4]'>Light Armor</div>
                    <div className="flex flex-col w-4/5">
                        <label htmlFor='LightarmorBase' className='font-bold pt-2 flex'>
                            <span className="pr-2">Level:</span>
                            <input id='LightarmorBase' type="number" className='bg-transparent  text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Lightarmor.base = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Lightarmor.base)}>
                            </input>
                        </label>

                        <label htmlFor='LightarmorDamage' className='font-bold pt-2 flex'>
                            <span className="pr-2 text-md font-normal">Reduction:</span>
                            <input id='LightarmorDamage' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Lightarmor.damage = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Lightarmor.damage)}>
                            </input>
                        </label>

                        <label htmlFor='LightarmorIncrease' className='font-bold pt-2 pb-4 flex'>
                            <span className="pr-2 text-md font-normal">Progress: </span>
                            <input id='LightarmorIncrease' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Lightarmor.progress = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Lightarmor.progress)}>
                            </input>
                        </label>

                    </div>
                </div>

                <div className='pt-3'>
                    <div className='font-bold text-[#8b9cd3] text-md border-b-2 border-[#ecce24b4]'>Acrobatics</div>
                    <div className="flex flex-col w-4/5">
                        <label htmlFor='AcrobaticsBase' className='font-bold pt-2 flex'>
                            <span className="pr-2">Level:</span>
                            <input id='AcrobaticsBase' type="number" className='bg-transparent  text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Acrobatics.base = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Acrobatics.base)}>
                            </input>
                        </label>

                        <label htmlFor='AcrobaticsDamage' className='font-bold pt-2 flex'>
                            <span className="pr-2 text-md font-normal">Reduction:</span>
                            <input id='AcrobaticsDamage' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Acrobatics.damage = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Acrobatics.damage)}>
                            </input>
                        </label>

                        <label htmlFor='AcrobaticsIncrease' className='font-bold pt-2 pb-4 flex'>
                            <span className="pr-2 text-md font-normal">Progress: </span>
                            <input id='AcrobaticsIncrease' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Acrobatics.progress = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Acrobatics.progress)}>
                            </input>
                        </label>

                    </div>
                </div>

                <div className='pt-3'>
                    <div className='font-bold text-[#8b9cd3] text-md border-b-2 border-[#ecce24b4]'>Armorer</div>
                    <div className="flex flex-col w-4/5">
                        <label htmlFor='ArmorerBase' className='font-bold pt-2 flex'>
                            <span className="pr-2">Level:</span>
                            <input id='ArmorerBase' type="number" className='bg-transparent  text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Armorer.base = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Armorer.base)}>
                            </input>
                        </label>

                        <label htmlFor='ArmorerDamage' className='font-bold pt-2 flex'>
                            <span className="pr-2 text-md font-normal">Reduction:</span>
                            <input id='ArmorerDamage' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Armorer.damage = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Armorer.damage)}>
                            </input>
                        </label>

                        <label htmlFor='ArmorerIncrease' className='font-bold pt-2 pb-4 flex'>
                            <span className="pr-2 text-md font-normal">Progress: </span>
                            <input id='ArmorerIncrease' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Armorer.progress = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Armorer.progress)}>
                            </input>
                        </label>

                    </div>
                </div>

                <div className='pt-3'>
                    <div className='font-bold text-[#8b9cd3] text-md border-b-2 border-[#ecce24b4]'>Speechcraft</div>
                    <div className="flex flex-col w-4/5">
                        <label htmlFor='SpeechcraftBase' className='font-bold pt-2 flex'>
                            <span className="pr-2">Level:</span>
                            <input id='SpeechcraftBase' type="number" className='bg-transparent  text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Speechcraft.base = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Speechcraft.base)}>
                            </input>
                        </label>

                        <label htmlFor='SpeechcraftDamage' className='font-bold pt-2 flex'>
                            <span className="pr-2 text-md font-normal">Reduction:</span>
                            <input id='SpeechcraftDamage' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Speechcraft.damage = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Speechcraft.damage)}>
                            </input>
                        </label>

                        <label htmlFor='SpeechcraftIncrease' className='font-bold pt-2 pb-4 flex'>
                            <span className="pr-2 text-md font-normal">Progress: </span>
                            <input id='SpeechcraftIncrease' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Speechcraft.progress = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Speechcraft.progress)}>
                            </input>
                        </label>

                    </div>
                </div>

                <div className='pt-3'>
                    <div className='font-bold text-[#8b9cd3] text-md border-b-2 border-[#ecce24b4]'>Axe</div>
                    <div className="flex flex-col w-4/5">
                        <label htmlFor='AxeBase' className='font-bold pt-2 flex'>
                            <span className="pr-2">Level:</span>
                            <input id='AxeBase' type="number" className='bg-transparent  text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Axe.base = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Axe.base)}>
                            </input>
                        </label>

                        <label htmlFor='AxeDamage' className='font-bold pt-2 flex'>
                            <span className="pr-2 text-md font-normal">Reduction:</span>
                            <input id='AxeDamage' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Axe.damage = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Axe.damage)}>
                            </input>
                        </label>

                        <label htmlFor='AxeIncrease' className='font-bold pt-2 pb-4 flex'>
                            <span className="pr-2 text-md font-normal">Progress: </span>
                            <input id='AxeIncrease' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Axe.progress = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Axe.progress)}>
                            </input>
                        </label>

                    </div>
                </div>

                <div className='pt-3'>
                    <div className='font-bold text-[#8b9cd3] text-md border-b-2 border-[#ecce24b4]'>Security</div>
                    <div className="flex flex-col w-4/5">
                        <label htmlFor='SecurityBase' className='font-bold pt-2 flex'>
                            <span className="pr-2">Level:</span>
                            <input id='SecurityBase' type="number" className='bg-transparent  text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Security.base = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Security.base)}>
                            </input>
                        </label>

                        <label htmlFor='SecurityDamage' className='font-bold pt-2 flex'>
                            <span className="pr-2 text-md font-normal">Reduction:</span>
                            <input id='SecurityDamage' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Security.damage = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Security.damage)}>
                            </input>
                        </label>

                        <label htmlFor='SecurityIncrease' className='font-bold pt-2 pb-4 flex'>
                            <span className="pr-2 text-md font-normal">Progress: </span>
                            <input id='SecurityIncrease' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Security.progress = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Security.progress)}>
                            </input>
                        </label>

                    </div>
                </div>

                <div className='pt-3'>
                    <div className='font-bold text-[#8b9cd3] text-md border-b-2 border-[#ecce24b4]'>Enchant</div>
                    <div className="flex flex-col w-4/5">
                        <label htmlFor='EnchantBase' className='font-bold pt-2 flex'>
                            <span className="pr-2">Level:</span>
                            <input id='EnchantBase' type="number" className='bg-transparent  text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Enchant.base = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Enchant.base)}>
                            </input>
                        </label>

                        <label htmlFor='EnchantDamage' className='font-bold pt-2 flex'>
                            <span className="pr-2 text-md font-normal">Reduction:</span>
                            <input id='EnchantDamage' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Enchant.damage = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Enchant.damage)}>
                            </input>
                        </label>

                        <label htmlFor='EnchantIncrease' className='font-bold pt-2 pb-4 flex'>
                            <span className="pr-2 text-md font-normal">Progress: </span>
                            <input id='EnchantIncrease' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Enchant.progress = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Enchant.progress)}>
                            </input>
                        </label>

                    </div>
                </div>

                <div className='pt-3'>
                    <div className='font-bold text-[#8b9cd3] text-md border-b-2 border-[#ecce24b4]'>Destruction</div>
                    <div className="flex flex-col w-4/5">
                        <label htmlFor='DestructionBase' className='font-bold pt-2 flex'>
                            <span className="pr-2">Level:</span>
                            <input id='DestructionBase' type="number" className='bg-transparent  text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Destruction.base = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Destruction.base)}>
                            </input>
                        </label>

                        <label htmlFor='DestructionDamage' className='font-bold pt-2 flex'>
                            <span className="pr-2 text-md font-normal">Reduction:</span>
                            <input id='DestructionDamage' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Destruction.damage = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Destruction.damage)}>
                            </input>
                        </label>

                        <label htmlFor='DestructionIncrease' className='font-bold pt-2 pb-4 flex'>
                            <span className="pr-2 text-md font-normal">Progress: </span>
                            <input id='DestructionIncrease' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Destruction.progress = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Destruction.progress)}>
                            </input>
                        </label>

                    </div>
                </div>

                <div className='pt-3'>
                    <div className='font-bold text-[#8b9cd3] text-md border-b-2 border-[#ecce24b4]'>Long Blade</div>
                    <div className="flex flex-col w-4/5">
                        <label htmlFor='LongbladeBase' className='font-bold pt-2 flex'>
                            <span className="pr-2">Level:</span>
                            <input id='LongbladeBase' type="number" className='bg-transparent  text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Longblade.base = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Longblade.base)}>
                            </input>
                        </label>

                        <label htmlFor='LongbladeDamage' className='font-bold pt-2 flex'>
                            <span className="pr-2 text-md font-normal">Reduction:</span>
                            <input id='LongbladeDamage' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Longblade.damage = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Longblade.damage)}>
                            </input>
                        </label>

                        <label htmlFor='LongbladeIncrease' className='font-bold pt-2 pb-4 flex'>
                            <span className="pr-2 text-md font-normal">Progress: </span>
                            <input id='LongbladeIncrease' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Longblade.progress = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Longblade.progress)}>
                            </input>
                        </label>

                    </div>
                </div>

                <div className='pt-3'>
                    <div className='font-bold text-[#8b9cd3] text-md border-b-2 border-[#ecce24b4]'>Illusion</div>
                    <div className="flex flex-col w-4/5">
                        <label htmlFor='IllusionBase' className='font-bold pt-2 flex'>
                            <span className="pr-2">Level:</span>
                            <input id='IllusionBase' type="number" className='bg-transparent  text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Illusion.base = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Illusion.base)}>
                            </input>
                        </label>

                        <label htmlFor='IllusionDamage' className='font-bold pt-2 flex'>
                            <span className="pr-2 text-md font-normal">Reduction:</span>
                            <input id='IllusionDamage' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Illusion.damage = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Illusion.damage)}>
                            </input>
                        </label>

                        <label htmlFor='IllusionIncrease' className='font-bold pt-2 pb-4 flex'>
                            <span className="pr-2 text-md font-normal">Progress: </span>
                            <input id='IllusionIncrease' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Illusion.progress = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Illusion.progress)}>
                            </input>
                        </label>

                    </div>
                </div>

                <div className='pt-3'>
                    <div className='font-bold text-[#8b9cd3] text-md border-b-2 border-[#ecce24b4]'>Mysticism</div>
                    <div className="flex flex-col w-4/5">
                        <label htmlFor='MysticismBase' className='font-bold pt-2 flex'>
                            <span className="pr-2">Level:</span>
                            <input id='MysticismBase' type="number" className='bg-transparent  text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Mysticism.base = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Mysticism.base)}>
                            </input>
                        </label>

                        <label htmlFor='MysticismDamage' className='font-bold pt-2 flex'>
                            <span className="pr-2 text-md font-normal">Reduction:</span>
                            <input id='MysticismDamage' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Mysticism.damage = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Mysticism.damage)}>
                            </input>
                        </label>

                        <label htmlFor='MysticismIncrease' className='font-bold pt-2 pb-4 flex'>
                            <span className="pr-2 text-md font-normal">Progress: </span>
                            <input id='MysticismIncrease' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Mysticism.progress = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Mysticism.progress)}>
                            </input>
                        </label>

                    </div>
                </div>

                <div className='pt-3'>
                    <div className='font-bold text-[#8b9cd3] text-md border-b-2 border-[#ecce24b4]'>Spear</div>
                    <div className="flex flex-col w-4/5">
                        <label htmlFor='SpearBase' className='font-bold pt-2 flex'>
                            <span className="pr-2">Level:</span>
                            <input id='SpearBase' type="number" className='bg-transparent  text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Spear.base = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Spear.base)}>
                            </input>
                        </label>

                        <label htmlFor='SpearDamage' className='font-bold pt-2 flex'>
                            <span className="pr-2 text-md font-normal">Reduction:</span>
                            <input id='SpearDamage' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Spear.damage = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Spear.damage)}>
                            </input>
                        </label>

                        <label htmlFor='SpearIncrease' className='font-bold pt-2 pb-4 flex'>
                            <span className="pr-2 text-md font-normal">Progress: </span>
                            <input id='SpearIncrease' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Spear.progress = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Spear.progress)}>
                            </input>
                        </label>

                    </div>
                </div>

                <div className='pt-3'>
                    <div className='font-bold text-[#8b9cd3] text-md border-b-2 border-[#ecce24b4]'>Blunt Weapon</div>
                    <div className="flex flex-col w-4/5">
                        <label htmlFor='BluntweaponBase' className='font-bold pt-2 flex'>
                            <span className="pr-2">Level:</span>
                            <input id='BluntweaponBase' type="number" className='bg-transparent  text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Bluntweapon.base = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Bluntweapon.base)}>
                            </input>
                        </label>

                        <label htmlFor='BluntweaponDamage' className='font-bold pt-2 flex'>
                            <span className="pr-2 text-md font-normal">Reduction:</span>
                            <input id='BluntweaponDamage' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Bluntweapon.damage = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Bluntweapon.damage)}>
                            </input>
                        </label>

                        <label htmlFor='BluntweaponIncrease' className='font-bold pt-2 pb-4 flex'>
                            <span className="pr-2 text-md font-normal">Progress: </span>
                            <input id='BluntweaponIncrease' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Bluntweapon.progress = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Bluntweapon.progress)}>
                            </input>
                        </label>

                    </div>
                </div>

                <div className='pt-3'>
                    <div className='font-bold text-[#8b9cd3] text-md border-b-2 border-[#ecce24b4]'>Athletics</div>
                    <div className="flex flex-col w-4/5">
                        <label htmlFor='AthleticsBase' className='font-bold pt-2 flex'>
                            <span className="pr-2">Level:</span>
                            <input id='AthleticsBase' type="number" className='bg-transparent  text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Athletics.base = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Athletics.base)}>
                            </input>
                        </label>

                        <label htmlFor='AthleticsDamage' className='font-bold pt-2 flex'>
                            <span className="pr-2 text-md font-normal">Reduction:</span>
                            <input id='AthleticsDamage' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Athletics.damage = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Athletics.damage)}>
                            </input>
                        </label>

                        <label htmlFor='AthleticsIncrease' className='font-bold pt-2 pb-4 flex'>
                            <span className="pr-2 text-md font-normal">Progress: </span>
                            <input id='AthleticsIncrease' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Athletics.progress = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Athletics.progress)}>
                            </input>
                        </label>

                    </div>
                </div>

                <div className='pt-3'>
                    <div className='font-bold text-[#8b9cd3] text-md border-b-2 border-[#ecce24b4]'>Unarmored</div>
                    <div className="flex flex-col w-4/5">
                        <label htmlFor='UnarmoredBase' className='font-bold pt-2 flex'>
                            <span className="pr-2">Level:</span>
                            <input id='UnarmoredBase' type="number" className='bg-transparent  text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Unarmored.base = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Unarmored.base)}>
                            </input>
                        </label>

                        <label htmlFor='UnarmoredDamage' className='font-bold pt-2 flex'>
                            <span className="pr-2 text-md font-normal">Reduction:</span>
                            <input id='UnarmoredDamage' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Unarmored.damage = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Unarmored.damage)}>
                            </input>
                        </label>

                        <label htmlFor='UnarmoredIncrease' className='font-bold pt-2 pb-4 flex'>
                            <span className="pr-2 text-md font-normal">Progress: </span>
                            <input id='UnarmoredIncrease' type="number" className='bg-transparent font-normal text-[#8b9cd3] placeholder:text-[#ecce24da] px-1 border-[#ecce24da] border-b-2' onChange={e => {
                                playerData.skills.Unarmored.progress = +e.target.value;
                                setHasData(true);
                            }}
                                placeholder={Math.floor(originalData.Unarmored.progress)}>
                            </input>
                        </label>

                    </div>
                </div>

            </div>

        </>
    )



}

export default Skills
