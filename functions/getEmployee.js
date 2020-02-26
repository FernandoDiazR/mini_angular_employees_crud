const fetch = require('node-fetch');
const API_ENDPOINT = 'http://dummy.restapiexample.com/api/v1/employees';

exports.handler = async (event, context) => {
  return await (fetch(API_ENDPOINT)
  .then(response => response.json())
  .then(data => ({
    statusCode: 200,
    body: data
  }))
  .catch(error => ({ statusCode: 422, body: String(error) })));
};