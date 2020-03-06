const axios = require('axios');
if(process.env.NODE_ENV !== "production") require('dotenv').config();
const API_ENDPOINT = process.env.AWS_API_ENDPOINT + '/api/employees';

export async function handler(event, context, callback){
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
