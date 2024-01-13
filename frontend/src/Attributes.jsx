import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from './DataContext';

const Attributes = () => {

  const [playerData, setPlayerData] = useContext(DataContext);
  const [attributes, setAttributes] = useState(Object.values(playerData.attributes));

  console.log(attributes)
  return (
    <>

      <div className="flex flex-col w-full">

        <div className='font-bold text-xl'>Attributes</div>
        {attributes.map((item, index) => {

          return (
            <div key={index}>
              <div className='font-bold text-[#8b9cd3] text-md border-b-2 border-[#ecce24b4]'>{Object.keys(playerData.attributes)[index]}</div>
              <div className='font-bold'>
                Level: {Math.floor(item.base)}
              </div>
              <div>
                Attribute Reduction: {Math.floor(item.damage)}
              </div>
              <div>
                Attribute Progress: {Math.floor(item.skillIncrease)}
              </div>
            </div>
          )
        }
        )}

      </div>


    </>
  )
}

export default Attributes
