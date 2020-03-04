const axios = require('axios');
if(process.env.NODE_ENV !== 'production') require('dotenv').config();
const API_ENDPOINT = process.env.AWS_API_ENDPOINT + 'api/employees';

exports.handler = (event, context, callback) => {
  axios.get(API_ENDPOINT).then(res => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(res.data),
    });
  }).catch(err => {
    callback(err, {
      statusCode: err.status || 500,
      body: JSON.stringify({
        error: err.message
      }),
    });
  })
};
