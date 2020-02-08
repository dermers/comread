import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:3000/users/';

class UserService {
    getUserData(userInfo) {
        return axios.get(USER_API_BASE_URL + userInfo.username, { headers: { "Authorization" : userInfo.token } });
    }
}

export default new UserService();