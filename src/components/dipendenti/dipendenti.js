import React, { Component } from "react";
import CustomCard from '../../common/card';
import CardService from '../../service/homeService/CardService';
import UserDefaultPng from '../../images/user.jpg';
import { Grid } from "@material-ui/core";


export default class Dipendenti extends Component {
    constructor(props){
        super(props);
        this.cardService = new CardService();
        this.state = {
            cards: []
    };
}

    componentDidMount(){

        this.cardService.getCardsInfos(
            this.onResponse.bind(this),
            this.onFailure.bind(this));

    }

    onResponse(result){
        console.log("Dati ricevuti: " + result);
        this.setState({cards: result});
    }

    onFailure(error){
        console.log("Rest Fallita: " + error);
        this.setState({card: null})
    }

    render(){
        return(
            <div>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    >
                    {this.state.cards.map(card =>
                    <div style={{padding:20}}>
                        <CustomCard key={card.id}
                        titolo={card.username}
                        subtitle={card.name}
                        description={card.email}
                        imgRef={UserDefaultPng}/>
                        </div>
                        )}
                </Grid>
            </div>
        )
    }
}