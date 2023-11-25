import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
export const api = axios.create({
  baseURL: 'https://brapi.dev/api/',
  params: {
    token: process.env.BRAPI_API_KEY
  }
});