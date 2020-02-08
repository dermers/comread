import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:5000/users/';

class UserService {
    getUserData(userInfo) {
        return axios.get(USER_API_BASE_URL + userInfo.username, { headers: { "Authorization" : userInfo.token } });
    }

    register(userInfo) {
        return axios.post(USER_API_BASE_URL, userInfo);
    }
}

export default new UserService();