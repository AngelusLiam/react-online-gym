import React from 'react'
import schedaDettaglioCss from '../css/gym/components/schedaDettaglio.css'


function SchedaDettaglio(props){

    return(
        <div className="container-dettaglio">
            <img src={props.urlImg}/>
            <h1>{props.title}</h1>
            <p>{props.albumId}</p>
        </div>
    )

}

export default SchedaDettaglio