import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from './DataContext';
import axios from 'axios';

const Properties = ({ host }) => {

    const [playerData, setPlayerData] = useContext(DataContext)
    const [properties, setProperties] = useState(Object.values(playerData.settings));
    const [playerProps, setPlayerProps] = useState([
        'Player Difficulty: ',
        'Logging Level: ',
        'Physics FPS: ',
        'Console Allowed: ',
        'Bedrest Allowed: ',
        'Wildrest Allowed: ',
        'Wait Allowed: ',
        'Staff Rank: ',
    ])
    const [staffRank, setStaffRank] = useState(playerData.settings.staffRank);

    

    const handleDataChange = () => {
        axios.put(`${host}/dataChange`, {
            settings: {
                staffRank: staffRank,
            }
        })        

        

    }

  return (
    <div className='flex flex-col w-full'>
        <div className='font-bold text-xl border-[#ecce24b4] border-b-2 mb-4'>Player Properties</div>

        <div className="flex justify-start gap-4">
            <div className='flex flex-col w-full'>
                {properties.map((item, index) => {
                    if(index <= 3) {
                        return (
                            <div key={index}>
                                {playerProps[index]}{item}
                            </div>
                        )
                    }
                })}
            </div>
            <div className='flex flex-col w-full'>
                  {properties.map((item, index) => {
                      if (index === 7) {


                          return (<form onSubmit={e => e.preventDefault()} key={index}>
                              <label htmlFor='staffRank'>{playerProps[index]}</label>
                              <select onChange={e => setStaffRank(e.target.value)} defaultValue={staffRank} className='bg-transparent' name="staffRank" id="staffRank">
                                  <option className='bg-[#00000034] text-[#707eac]' value='0'>Player</option>
                                  <option className='bg-[#00000034] text-[#707eac]' value='1'>Moderator</option>
                                  <option className='bg-[#00000034] text-[#707eac]' value='2'>Administrator</option>
                                  <option className='bg-[#000000af] text-[#707eac]' value='3'>Server Owner</option>
                              </select>
                              <button onClick={handleDataChange}>Change</button>
                          </form>)

                      } else if (index > 3) {
                          return (
                            <div key={index}>
                                {playerProps[index]}{item}
                            </div>
                        )
                    }
                })}
            </div>
        </div>


    </div>
  )
}

export default Properties
