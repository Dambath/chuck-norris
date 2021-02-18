import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Joke from '../../components/card/index'
import '../jokes/style.css'
import { Select } from 'antd'
import chuckImage from '../../chuck.jpe'
const {Option} = Select

function Main() {
    
    const [jokes, setJokes] = useState([])
    const [category, setCategory] = useState([])

    useEffect(() => {
        generateJoke()
        fetchCategory()
    }, [])

    const jokesItems = jokes.map((item, i) => <Joke id={item.id} value={item.value} icon={item.icon_url}/>)

    const categoryitems = category.map((item, i) => <Option>{item[i]}</Option>)

    const generateJoke = () => {
        axios.get('https://api.chucknorris.io/jokes/random').then(res => setJokes([res.data]))
    }

    const fetchCategory = () => {
        axios.get('https://api.chucknorris.io/jokes/categories').then(res => setCategory(res.data))
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