import axios from "axios";

const api = axios.create({
  baseURL: "https://django-deply-test.onrender.com",
});

const ADMIN_TOKEN = "22476bb403ac1122b5f8dee62b95e52dde1826ee";

export const fetchAuthToken = () => {
  const body =  {
      username: 'admin',
      email: 'admin@email.com',
      password: 'victvsapi'
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

