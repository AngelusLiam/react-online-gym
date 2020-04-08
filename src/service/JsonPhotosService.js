import axios from 'axios'

export function getAllImage() {
        axios.get("https://jsonplaceholder.typicode.com/photos").then(result => {
        return result.data;
    })
}
