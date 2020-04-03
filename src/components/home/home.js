import React, { Component } from "react";
import CustomCard from '../../common/card';
import CardService from '../../service/homeService/CardService';
import axios from 'axios';


export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            cards: []
    };
}

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res =>{
            this.setState({cards: res.data});
            console.log(res);
        })
    }

    render(){
        console.log("DATI IN CARDS (RENDER)", this.state.cards);
        return(
            <ul>
            {this.state.cards.map(card => <li>{card.username}</li>)}
            </ul>
        )
    }
}