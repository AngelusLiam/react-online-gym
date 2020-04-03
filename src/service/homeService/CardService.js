import axios from 'axios';

export default class CardService{
    getCardsInfos(onResponse, onFailure){
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(function(result){
            console.log("Rest avvenuta con successo");
            onResponse(result.data);
        }, function(error){
            console.log("Rest fallita");
            onFailure(error.data);
        })
    }
}