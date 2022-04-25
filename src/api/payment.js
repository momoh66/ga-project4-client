import 'regenerator-runtime/runtime.js';
import axios from 'axios';

export const payment = async (id) => {
  const options = {
    method: 'POST',
    url: 'http://localhost:8010/stripe-payments/1',
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
    },
  };

  const { data } = await axios.request(options);
  console.log('data', data);
  return data;
};
