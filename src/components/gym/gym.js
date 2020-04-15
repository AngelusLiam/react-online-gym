import React, { useState } from 'react'
import TodoItem from '../../common/todoItem'
import GymCss from '../../css/gym/gym.css'
import fakeDatasCardsCss from '../../css/gym/components/fakeDataCards.css'
import CustomImageInfo from '../../common/CustomImageInfo'
import { TextField, InputLabel, Select, MenuItem, Grid, ListSubheader, Button } from '@material-ui/core'
import axios from 'axios'
import Loading from '../../common/loading'



function Gym(){
    const[search, setSearch] = useState('')
    const[restData, setRestData] = useState([])
    const[isLogged, setIsLogged] = useState(false)
    const[isLoading, setIsLoading] = useState(true)

    React.useEffect(() => { 
        axios.get("https://jsonplaceholder.typicode.com/photos")
        .then(result => {
            setRestData(result.data); 
            setIsLoading(false);
        });
    }, [])


    const handleLogin = () => isLogged ? setIsLogged(false) : setIsLogged(true)
    const txtLogged = isLogged ? <div>Logout</div> : <div>Login</div>

    const filteredName = restData.filter(data => data.title.includes(search))
    const fromFetch = filteredName.map(data => <CustomImageInfo key={data.id} id={data.id} urlImg={data.url} name={data.title} albumId={data.albumId}/>).slice(0, 50)
    
    
    
    return(
        <div className="container-two-sides">
                <div className='lateral-right'>
                    <div className="row-lat">
                    <div>
                        <Button onClick={handleLogin}>{txtLogged}</Button>
                    </div>
                        <TextField type="text" label="Cerca" value={search} onChange={e => setSearch(e.target.value)}/>
                    </div>
                </div>
                <div className="lateral-left">
                    {isLoading ? <Loading/> :
                    <div>
                        <Grid
                            container
                            direction="row"
                            justify="space-evenly"
                            alignItems="center"
                            >
                            {fromFetch}
                        </Grid>
                    </div>
                    }
                </div>
        </div>
    )
}

export default Gym