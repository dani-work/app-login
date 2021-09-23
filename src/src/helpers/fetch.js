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
