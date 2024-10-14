import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:3000/users/';

class UserService {
  getUserProfile() {
    return axios.get(API_URL + 'profile', { headers: authHeader() });
  }

  register(user) {
    return axios.post(API_URL, user);
  }
}

export default new UserService();
