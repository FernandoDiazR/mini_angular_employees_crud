const axios = require('axios');
if(process.env.NODE_ENV !== 'production') require('dotenv').config();
const API_ENDPOINT = process.env.API_ENDPOINT;

exports.handler = (event, context, callback) => {
  axios.get(API_ENDPOINT).then(res => {
    let employees = [];
    res.data.data.forEach(employee => {
      employees.push({
        _id: employee._id,
        name: employee.employee_name,
        position: '',
        office: employee.employee_age,
        salary: employee.employee_salary,
      })
    });
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(employees),
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
