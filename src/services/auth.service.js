import axios from 'axios';

const API_URL = 'http://localhost:3000/auth/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'login', {
        username: user.username,
        password: user.password,
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem('token', response.data.token);
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('token');
  }
}

export default new AuthService();
