import axios from "axios";

const api = axios.create({
  baseURL: "https://django-deply-test.onrender.com",
});

const ADMIN_TOKEN = "";

export const fetchAuthToken = () => {
  const body =  {
      username: 'admin',
      email: 'admin@email.com',
      password: ''
  }
  
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

