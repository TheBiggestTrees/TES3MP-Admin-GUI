import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PlayerSelect from './components/PlayerSelect';


const host = 'http://localhost:3000';


function App() {
  

  const [nameText, setNameText] = useState('');

  const handleChange = (e) => {
    
    e.preventDefault();

    axios.put(`${host}/nameChange`, {
      login: {
        name: nameText
      }
    })
    .then(() => {
      setNameText('');
    })
 
  }

  function handleName(e) {
    setNameText(e.target.value);
  }


  return (
    <>
      <div className='tracking-[.125rem]'>
        <PlayerSelect />
        <form onSubmit={handleChange}>
          <input className='bg-[#03030334] text-[#8b9cd3] rounded-full' name='playerName' value={name} type='text' onChange={handleName}></input>
          <button type='button' onClick={handleChange} >Change Name</button>
        </form>
      </div>
    </>
  )
}

export default App
