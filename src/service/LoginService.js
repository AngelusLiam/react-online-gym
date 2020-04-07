import axios from 'axios'

export default class LoginService{
    TAG = "LoginService"
    postLogin(email, password, onSuccess, onFailure){
        axios.post('https://reqres.in/api/login', {email:email, password:password}).then(
            result => {
                onSuccess(result)
                console.log(this.TAG, result.status)
            }, error => {
                onFailure(error)
                console.log(this.TAG, error.status)
            }
        )
    }
}