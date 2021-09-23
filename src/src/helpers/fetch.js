import * as API_ROUTES from '../constants/api';

export const loginPost = (email, password) =>{

    return fetch(API_ROUTES.LOGIN, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  });
}

export const checkToken = (token) =>{

  return fetch(API_ROUTES.CHECK_TOKEN, {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'x-auth-token': token
  }
});
}
