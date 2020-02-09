import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:5000/users/';

class UserService {
    getUserData(userInfo) {
        return axios.get(USER_API_BASE_URL + userInfo.username, { headers: { "Authorization" : userInfo.token } });
    }

    register(userInfo) {
        return axios.post(USER_API_BASE_URL, userInfo);
    }

    changeUserData(userInfo, updating) {
        return axios.put(USER_API_BASE_URL + userInfo.username, updating, { headers: { "Authorization" : userInfo.token } });
    }
}

export default new UserService();