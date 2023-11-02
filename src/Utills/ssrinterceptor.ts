import axios from 'axios';
import { getSession } from 'next-auth/react';

// Create an Axios instance
const instance = axios.create({
  baseURL: 'http://localhost:4000/api',
});

// Add a request interceptor
instance.interceptors.request.use(
  async (config) => {
    // Get the session from NextAuth.js
    const session = await getSession();
    console.log(session)

    // If the session exists and contains an access token, set it on the Authorization header
    if (session && session.user.accessToken) {
      config.headers.Authorization = `${session.user.accessToken}`;
    }

    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default instance;
