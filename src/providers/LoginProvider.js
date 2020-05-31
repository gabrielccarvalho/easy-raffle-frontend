import api from '../services/api';

export default class Login {
  async login(email, password) {
    try {
      const response = await api.post('/session', {
        email: email,
        password: password,
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
