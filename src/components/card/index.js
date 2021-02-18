import React, { useState, useEffect } from 'react'
import { Card } from 'antd'
import 'antd/dist/antd.css';


function Joke(props) {
    return (
        <Card  title='Chuck Norris joke' style={{width: '500px', margin: '0 auto'}}>
            <img style={{margin: '0 170px 20px'}} src={props.icon} />
            <p style={{fontSize: '20px', fontWeight: '600', textAlign: 'center'}}>{props.value}</p>
        </Card>
    )
}

export default Joke;