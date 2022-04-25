import 'regenerator-runtime/runtime.js';
import axios from 'axios';

export const credentials = async () => {

  const options = {
    method: 'GET',
    url: 'http://localhost:8010/credentials/',
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
    }
  };

  const { data } = await axios.request(options);
  // console.log('data', data);
  return data;

  
};
