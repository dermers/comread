import axios from 'axios'

const CHUNK_API_BASE_URL = 'http://localhost:5000/';

class ChunkService {
    getChunksToReview(userInfo) {
        return axios.get(CHUNK_API_BASE_URL + 'mychunks/' + userInfo.user_id, 
        { headers: { "Authorization" : userInfo.token } });
    }

    getFeedbackChunks(userInfo) {
        return axios.get(CHUNK_API_BASE_URL + 'allchunks/' + userInfo.user_id, 
        { headers: { "Authorization" : userInfo.token } })
    }
}

export default new ChunkService();