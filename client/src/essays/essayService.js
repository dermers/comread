import axios from 'axios'

const ESSAY_API_BASE_URL = 'http://localhost:5000/essay/';

class EssayService {
    createEssay(essayInfo) {
        return axios.post(ESSAY_API_BASE_URL, essayInfo)
    }
    
}

export default new EssayService();