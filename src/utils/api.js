import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

const ADMIN_TOKEN = process.env.REACT_APP_ADMIN_TOKEN;

export const fetchAuthToken = () => {
  const body = process.env.REACT_APP_ADMIN_CREDENTIALS;
  
  return api
    .post('/dj-rest-auth/login/', body)
    .then(response => response.data.key);
}

export const fetchExamSessions = () => {
  const headers = { headers: {
    'Authorization': `Token ${ADMIN_TOKEN}`
  }}

  return api
    .get('/api/sessions/', headers)
    .then(response => response.data);
}

