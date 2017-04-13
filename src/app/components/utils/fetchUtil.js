import {decrypt} from './crypt';

export function getAuthData() {
  let authString = sessionStorage.getItem('authorisationData');
  if (!authString)
    return null;
  let jsonobj = decrypt(authString);
  console.log('json obj', jsonobj);
  return jsonobj;
}

export function injectBearer(request){
  let auth = getAuthData();
  if (auth == null)
    return request;

  let bearer = 'Bearer ' + auth.access_token;
  request.headers = Object.assign(request.headers, {'Authorization': bearer});
  console.log(request);
  return request;
}
