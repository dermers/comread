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

    putFeedbackOnChunk(userInfo, chunk_id, fb) {
        return axios.post(CHUNK_API_BASE_URL + 'chunk/' + chunk_id + '-' + fb)
    }
}

export default new ChunkService();