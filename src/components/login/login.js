import React, { Component } from 'react'
import LoginCss from '../../css/login/login.css'
import LoginService from '../../service/LoginService';
import { Button } from 'react-bootstrap';
import { TextField } from '@material-ui/core';

export default class Login extends Component{
    constructor(props){
        super(props);
        this.loginService = new LoginService();
        this.state = {
            email: '',
            password: '',
            showSuccess: false,
            showFailure: false,
            successMessage: '',
            failureMessage: '',
            missingFields: false,
            isLoggedIn: false,
        }
    }

    changeText(field, event){
        this.setState({[field]: event.target.value})
    }

    onSubmit(event){
        event.preventDefault()
    }

    login(){
        if(this.state.email.length > 0 && this.state.password.length > 0){
            this.setState({missingFields: false})
            this.loginService.postLogin(
                this.state.email,
                this.state.password,
                this.onSuccess.bind(this),
                this.onFailure.bind(this)
            ) 
            } else {
                this.setState({missingFields: true});
        }
    }
    
    onMissingValues(){
        if(this.state.missingFields){
            return <div className='row-form' style={{color:"red"}}>I campi non possono essere vuoti</div>
        } else {
            return <div></div>
        }
    }

    onSuccess(){
        this.setState(
            {
                showSuccess:true,
                successMessage: 'Login avvenuto con successo...',
                showFailure: false,
                failureMessage: '',
                isLoggedIn: true,
            }
        )
    }

    onShowSuccessMessage(){
        if(this.state.showSuccess){
            return <div className='row-form' style={{color:"green"}}>{this.state.successMessage}</div>
        } else {
            return <div></div>
        }
    }

    onFailure(error){
        this.setState(
            {
                showSuccess: false,
                successMessage: '',
                showFailure: true,
                failureMessage: '' + error,
                isLoggedIn: false,
            }
        )
    }

    onShowFailureMessage(){
        if(this.state.showFailure){
            return <div className='row-form' style={{color:"red"}}>{this.state.failureMessage}</div>
        } else {
            return <div></div>
        }
    }

    isUserLogged(){
        if(this.state.isLoggedIn){
            return <p>Yes!</p>
        } else {
            return <p>No!</p>
        }
    }

    render(){
        let successMessage = this.onShowSuccessMessage();
        let failureMessage = this.onShowFailureMessage();
        let missingValues = this.onMissingValues();
        let isUserLogged = this.isUserLogged();
        return(
            <div className="container-form">
                <div>
                    <p>Utente loggato: {isUserLogged}</p>
                </div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="form-group">
                        <TextField className="input-pos" variant="outlined" label="Email" value={this.state.email} onChange={this.changeText.bind(this, 'email')} type="text" placeholder="Inserisci email"/>
                    </div>
                    <div className="form-group">
                        <TextField className="input-pos" variant="outlined" label="Password" value={this.state.password} onChange={this.changeText.bind(this, 'password')} type="password" placeholder="Inserisci email"/>
                    </div>
                    <div className="form-group">
                        <Button onClick={this.login.bind(this)}>Login</Button>
                    </div>
                    {successMessage}
                    {failureMessage}
                    {missingValues}
                </form>
            </div>
        )
    }
}