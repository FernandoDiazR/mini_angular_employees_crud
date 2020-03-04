const axios = require('axios').default;

const API_ENDPOINT = 'http://dummy.restapiexample.com/api/v1/employees'

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
    body: JSON.stringify({
      data: response
    })
  }
}
