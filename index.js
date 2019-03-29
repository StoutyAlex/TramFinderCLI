require('dotenv').config();
const pipeline = require('./pipeline');

pipeline('piccadilly gardens').then(data => console.log(data));