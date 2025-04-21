import React, { useEffect } from 'react'
import { useState } from 'react'
import { IoLogoGithub } from "react-icons/io";
import git from './assets/images/github.png'
import lupa from './assets/images/lupa.png'
import Info from './components/info.jsx';
import './App.css'


const App = () => {
  const [user, setUser] = useState('');
  const [search, setSearch] = useState('');

  const handleOnClick = () => {
    setUser(search);
  }

  return (
    <main className='container'>
      <div className='header'>
        <IoLogoGithub />
        <h1>Perfil</h1>
        <img src={git} alt="" />
      </div>
      <div className='container-input'>
        <input type="text" onChange={(e)=>{setSearch(e.target.value)}} placeholder='Digite um usuário do Github' />
        <button onClick={handleOnClick} className='btn-search'><img src={lupa} alt="" /></button>
      </div>
      {user.length>0 && <Info user={user} />}

    </main>
  )
}

export default App