const axios = require('axios');
const isProdMode = (process.env.NODE_ENV === "production");
if (!isProdMode) require('dotenv').config();


let API_ENDPOINT = isProdMode ? process.env.AWS_API_ENDPOINT : process.env.TEST_API_ENDPOINT;
API_ENDPOINT+= '/api/employees';

export async function handler(event, context, callback) {
  let res;
  try {
    res = await axios.get(API_ENDPOINT);
  } catch (err) {
    return {
      statusCode: err.status || 500,
      body: JSON.stringify({
        error: err.message
      }),
    }
  }
  return {
    statusCode: 200,
    body: JSON.stringify(res.data),
  }
};
