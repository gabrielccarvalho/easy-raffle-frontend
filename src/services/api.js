import axios from 'axios';

const homolog = 'http://localhost:3333';

const api = axios.create({
  baseURL: homolog,
  headers: { 'Content-Type': 'application/json' },
});

export default api;
