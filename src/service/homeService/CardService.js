import axios from 'axios';

export default class CardService{
    getCardsInfos(onResponse, onFailure){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(result =>{
            console.log("Rest avvenuta con successo" + result.data);
            onResponse(result.data);
        }, error =>{
            console.log("Rest fallita");
            onFailure(error.data);
        })
    }
}