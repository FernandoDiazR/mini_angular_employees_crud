import { HttpClient } from '@angular/common/http';

const API_ENDPOINT = 'http://localhost:3000/api/employees';

exports.handler = async (event, context) => {
  return HttpClient.get(API_ENDPOINT);
};