// Lab3.1
// const fs = require('fs');
// const axios = require('axios');
// const uuid = require('uuid');

// Lab3.2
// const file = require('./fileService');
// file.readFileJSON('a.json').then(res => console.log(res));

// const { readFileJSON } = require('./fileService');
// readFileJSON('a.json').then(res => console.log(res));

// Lab3.3
const CustomError = require('./CustomError');
const cus = new CustomError('Test error', 404);
console.log(cus.message);
console.log(cus.statusCode);
