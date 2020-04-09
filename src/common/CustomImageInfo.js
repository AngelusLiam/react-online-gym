import React, { useState } from 'react'
import GymCss from '../css/gym/components/fakeDataCards.css'


function CustomImageInfo(props) {
    const[checkbox, setCheckBox] = useState(false)

    const handleCheck = () => {
        if(checkbox){
            setCheckBox(false)
        } else {
            setCheckBox(true)
        }
        console.log(checkbox)
    }

    return(
        <div className='custom-img-item'>
            <img className='custom-img-img'src={props.urlImg}/>
            <h3 className='custom-img-title'style={{display: props.name ? "block" : "none"}}>{props.name}</h3>
            <p className='custom-img-txt'>Album ID: {props.albumId}</p>
            <input id="ckbox" type="checkbox" onChange={handleCheck}/>
        </div>
    )
}

 export default CustomImageInfo
