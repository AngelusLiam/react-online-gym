import React, { useState } from 'react'
import GymCss from '../css/gym/components/fakeDataCards.css'
import {Button, Dialog} from '@material-ui/core'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import DettaglioCard from '../components/gym/dettaglioCard'


function CustomImageInfo(props) {

    let path = "/gym/" + props.id
    let history = useHistory();

    const handleClick = () => {
        history.push(path)
    }


    return(
        <div className='custom-img-item' onClick={handleClick}>
            <img className='custom-img-img'src={props.urlImg}/>
            <h3 className='custom-img-title'style={{display: props.name ? "block" : "none"}}>{props.name}</h3>
            <p className='custom-img-txt'>Album ID: {props.albumId}</p>          
        </div>
    )
}

 export default CustomImageInfo
