import { Api } from './Api';

function login(data) {
  return Api.post('/login', data, false);
}

function logOut() {
  return Api.get('/logout', true);
}

export const userService = {
  login,
  logOut,
}
