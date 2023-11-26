import axios from 'axios';
import { QueryClient } from 'react-query';

const client = axios.create({
  baseURL: 'http://localhost:3000/stocks/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const useQueryClient = new QueryClient();

export default client;
