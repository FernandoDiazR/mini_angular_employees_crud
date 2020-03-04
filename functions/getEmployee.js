const axios = require('axios');
if(process.env.NODE_ENV !== 'production') require('dotenv').config();
const API_ENDPOINT = process.env.API_ENDPOINT;

exports.handler = (event, context, callback) => {
  axios.get(API_ENDPOINT).then(res => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        _id: res.data.data._id,
        name: res.data.data.employee_name,
        position: '',
        office: res.data.data.employee_age,
        salary: res.data.data.employee_salary,
      }),
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
