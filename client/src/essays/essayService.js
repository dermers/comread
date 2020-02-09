import axios from 'axios'

const ESSAY_API_BASE_URL = 'http://localhost:5000/essay/';

class EssayService {
    createEssay(userInfo, essayInfo) {
        return axios.post(ESSAY_API_BASE_URL, {user_id: userInfo.user_id, body: essayInfo}, { headers: { "Authorization" : userInfo.token } })
    }
}

export default new EssayService();