import axios from 'axios'

export default class ListService{
        getListData(onResponse, onFailure){
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(result =>{
                console.log("Rest code: " + result.status);
                onResponse(result.data);
            }, error =>{
                console.log("Rest code: " + error.status);
                onFailure(error.status);
            })
        }
}