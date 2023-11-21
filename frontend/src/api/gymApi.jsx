import axios from 'axios';

const gymApi = axios.create({
  baseURL: 'http://localhost:8081',
});
export { gymApi };