import React, { useState } from 'react'
import TodoItem from '../../common/todoItem'
import GymCss from '../../css/gym/gym.css'
import fakeDatasCardsCss from '../../css/gym/components/fakeDataCards.css'
import CustomImageInfo from '../../common/CustomImageInfo'
import { TextField, InputLabel, Select, MenuItem, Grid, ListSubheader, Button } from '@material-ui/core'
import axios from 'axios'



function Gym(){
    const[search, setSearch] = useState('')
    const[restData, setRestData] = useState([])
    const[sortValue, setSortValue] = useState(1)

    React.useEffect(() => { 
        axios.get("https://jsonplaceholder.typicode.com/photos").then(result => setRestData(result.data))
        console.log(restData)
    }, [])

    const filteredName = restData.filter(data => data.title.includes(search))
    const fromFetch = filteredName.map(data => <CustomImageInfo key={data.id} urlImg={data.url} name={data.title} albumId={data.albumId}/>).slice(0, 10)
    
    
    
    return(
        <div className="container-two-sides">
                <div className='lateral-right'>
                    <div className="row-lat">
                        <TextField type="text" label="Cerca" value={search} onChange={e => setSearch(e.target.value)}/>
                    </div>
                    <div>
                        <Button>Ordina per Nome</Button>
                    </div>
                    {/*} WIP SORT
                    <div className="row-lat">
                        <InputLabel id="label">Ordina per:</InputLabel>
                            <Select labelId="label" id="select" value={sortValue} onChange={onSortChange}>
                            <MenuItem value={1}>Casuale</MenuItem>
                            <MenuItem value={2}>Album</MenuItem>
                            <MenuItem value={3}>Nome</MenuItem>
                            </Select>
                    </div>
                    */}
                </div>
                <div className="lateral-left">
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
                </div>
        </div>
    )
}

export default Gym