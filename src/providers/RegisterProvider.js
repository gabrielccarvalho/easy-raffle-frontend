import api from '../services/api';

export default class Register {
  async register(name, email, cpf, password) {
    try {
      const response = await api.post('/users', {
        name: name,
        email: email,
        numero_cadastro: cpf,
        password: password,
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
