import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'
import LoginCss from '../../css/login/login.css'
import { Link, Redirect } from 'react-router-dom'

function Registrazione() {
    const[formData, setFormData] = useState({
        nome: '',
        cognome: '',
        email: '',
        password: '',
    })
    const[redirect, setRedirect] = useState(false)

    const updateFormData = event => {
        setFormData({
            ...formData, 
            [event.target.name]: event.target.value
        });
    }

    const {nome, cognome, email, password} = formData;

    const onSubmitClick = () => {
        console.log(formData);
        console.log(redirect);
        setRedirect(true)
        }


    if(redirect){
        return <Redirect to="/"/>
    }
    return(
        <div>
            <form onSubmit={onSubmitClick}>
                <div className="container-form">
                    <div className="text-field-form">
                        <div className="single-field">
                            <TextField 
                            variant="outlined"
                            label="Nome" 
                            type="text" 
                            value={nome} 
                            placeholder="Inserisci il tuo nome" 
                            name="nome" 
                            onChange={e => updateFormData(e)} 
                            required/>
                        </div>
                        <div className="single-field">
                            <TextField 
                            variant="outlined"
                            label="Cognome" 
                            type="text" 
                            value={cognome} 
                            placeholder="Cognome" 
                            name="cognome" 
                            onChange={e => updateFormData(e)} 
                            required/>
                        </div>
                    </div>
                    <div className="text-field-form">
                        <div className="single-field">
                            <TextField 
                            variant="outlined"
                            label="Email" 
                            type="Email" 
                            value={email} 
                            placeholder="Email" 
                            name="email" 
                            onChange={e => updateFormData(e)} 
                            required/>
                        </div>
                        <div className="single-field">
                            <TextField 
                            variant="outlined"
                            label="Password"
                            type="Password" 
                            value={password} 
                            placeholder="Password" 
                            name="password" 
                            onChange={e => updateFormData(e)} 
                            required/>
                        </div>
                    </div>
                    <Button type="submit">Invia</Button>
                </div>
            </form>
        </div>

    )

}

export default Registrazione