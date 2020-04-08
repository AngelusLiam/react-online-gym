import React, { useState } from 'react'
import TodoItem from '../../common/todoItem'
import GymCss from '../../css/gym/gym.css'
import fakeDatasCardsCss from '../../css/gym/components/fakeDataCards.css'
import CustomImageInfo from '../../common/CustomImageInfo'
import fakeDatas from '../../fakePhotoJson'
import { TextField, Button, Grid } from '@material-ui/core'


function Gym(){
    const[search, setSearch] = useState('')

    const filteredData = fakeDatas.filter(data => data.title.includes(search))
    const fakeDataFiltered = filteredData.map(data => <CustomImageInfo key={data.id} urlImg={data.url} name={data.title} albumId={data.albumId}/>)
    
    return(
        <div>
            <div className="in-search">
                <TextField type="text" label="Cerca" value={search} onChange={e => setSearch(e.target.value)}/>
            </div>
            <div>
                <div>
                <Grid
                        container
                        direction="row"
                        justify="space-evenly"
                        alignItems="center"
                        >
                    {fakeDataFiltered}
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default Gym