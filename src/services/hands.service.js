import axios from 'axios';
import authHeader from './auth-header';  

const API_URL = 'http://localhost:3000/hands/';  

class HandsService {
  getHandsByUser() {
    return axios.get(`${API_URL}`, { headers: authHeader() });
  }

  uploadHandFile(file, userId) {
    const formData = new FormData();
    formData.append('file', file);  
    formData.append('userId', userId);  

    return axios.post(`${API_URL}upload`, formData, {
      headers: {
        ...authHeader(), 
        'Content-Type': 'multipart/form-data',
      }
    });
  }
}

export default new HandsService();
