import React, { useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import Loading from '../../common/loading'
import SchedaDettaglio from '../../common/SchedaDettaglio'
import crossBack from '../../images/back.png'
import schedaDettaglioCss from '../../css/gym/components/schedaDettaglio.css'


function DettaglioCard(props) {
    let {id} = useParams();
    const[data, setData] = useState({})
    const[isLoading, setIsLoading] = useState(true)

    const uri = "https://jsonplaceholder.typicode.com/photos/" + id

    React.useEffect(() => {
        axios.get(uri)
        .then(result => {
            setIsLoading(false)
            setData(result.data) 
            window.scrollTo(0,0)
            console.log(uri)  
        })
    }, [])
    
    const handleBack = () => props.history.goBack();


    if(isLoading){
        return <Loading/>
    } else {
    
        return(
            <div>
                <li>
                    <img className="img-back" 
                    src={crossBack}
                    onClick={handleBack} />
                </li>
                <div>
                    <SchedaDettaglio
                    urlImg = {data.url}
                    name = {data.title}
                    albumId={data.albumId}
                    />
                </div>
            </div>
        )
    }
}

export default DettaglioCard