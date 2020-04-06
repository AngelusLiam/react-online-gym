import axios from 'axios'

function getData(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(result => {
        console.log("Rest success: " + result.data);
        return result.data
    }, error => {
        console.log("Rest Failed" + error.data);
        return error.data
    })
}

export default getData