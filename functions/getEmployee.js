const axios = require('axios').default;

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/todos';

exports.handler = async (event, context) => {
  let response
  try {
    response = await axios.get(API_ENDPOINT);
    // handle response
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({
        error: err.message
      })
    }
  }

  return {
    statusCode: 200,
    body: {
      data: response.data
    }
  }
}
