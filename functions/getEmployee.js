const axios = require('axios');

const API_ENDPOINT = process.env.API_ENDPOINT;

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
