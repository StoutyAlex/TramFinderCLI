require('dotenv').config();
const pipeline = require('./pipeline');

pipeline('broadway').then(data => console.log(data));