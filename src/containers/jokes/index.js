import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Joke from '../../components/card/index'
import '../jokes/style.css'
import chuckImage from '../../chuck.jpe'

function Main() {
    
    const [jokes, setJokes] = useState([])

    useEffect(() => {
        generateJoke()
    }, [])

    const jokesItems = jokes.map((item, i) => <Joke id={item.id} value={item.value} icon={item.icon_url}/>)

    const generateJoke = () => {
        axios.get('https://api.chucknorris.io/jokes/random').then(res => setJokes([res.data]))
    }

    return (
        <div>
            <img src={chuckImage} style={{width: '100%',height: '300px', margin: '0 auto 15px'}}/>
            <button style={{fontSize: '30px', fontWeight: '600'}} onClick={generateJoke}>Generate joke</button>
            {jokesItems}
        </div>
    )
}

export default Main;