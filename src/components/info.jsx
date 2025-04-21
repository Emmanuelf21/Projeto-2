import React, { useEffect, useState } from 'react'
import './info.css'

const info = ({user}) => {
    const [info, setInfo] = useState([])

    useEffect(()=>{
        fetch(`https://api.github.com/users/${user}`)
        .then(res=>res.json())
        .then(data => setInfo(data))
    },[user])

    if(info.status==404){
        return(
            <div className='github-sem-info'>
                <p>Nenhum perfil foi encontrado com ese nome de usuário.<br/>
                Tente novamente</p>
            </div>
        )
    }
    else{
        return (
            <div className='github-info'>
                <img src={info.avatar_url} alt="Foto-Perfil" />
                <div className='info'>
                    <h2>{info.name}</h2>
                    <p>{info.bio}</p>
                </div>
            </div>
        )
        
    }
}

export default info