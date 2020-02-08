import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:3000/auth/';

class AuthService {

    login(credentials){
        console.log('in login')
        return axios.post(USER_API_BASE_URL + "login", credentials);
    }

    getUserInfo(){
        return JSON.parse(localStorage.getItem("userInfo"));
    }

    getAuthHeader() {
       return {headers: {Authorization: 'Bearer ' + this.getUserInfo().token }};
    }

    logOut() {
        localStorage.removeItem("userInfo");
        return axios.post(USER_API_BASE_URL + 'logout', {}, this.getAuthHeader());
    }
}

export default new AuthService();