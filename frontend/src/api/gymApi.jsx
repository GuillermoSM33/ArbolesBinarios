import axios from 'axios';

const gymApi = axios.create({
  baseURL: 'http://localhost:3306',
});
export { gymApi };