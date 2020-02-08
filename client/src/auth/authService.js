import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:5000/auth/';

class AuthService {

    login(credentials) {
        console.log('credentials in login service: ' + credentials.email, credentials.password)
        return axios.post(USER_API_BASE_URL + "login", credentials);
    }

    getUserInfo() {
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