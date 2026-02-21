import axios from 'axios';

// Use the deployed backend for all environments
const API_BASE_URL = 'https://onepage-backend-six.vercel.app/';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;





