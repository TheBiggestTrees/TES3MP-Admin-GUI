import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from './DataContext';

const Properties = () => {

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

                        if(item === 0) {
                            return (
                            <div key={index}>
                                {playerProps[index]}Player
                            </div>
                        )}
                        else if(item === 1) {
                            return (
                            <div key={index}>
                                {playerProps[index]}Moderator
                            </div>
                        )}
                        else if(item === 2) {
                            return (
                            <div key={index}>
                                {playerProps[index]}Administrator
                            </div>
                        )}
                        else if(item === 3) {
                            return (
                            <div key={index}>
                                {playerProps[index]}Server Owner
                            </div>
                        )}

                    } else if(index > 3) {
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
