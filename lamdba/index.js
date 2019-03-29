require('dotenv').config();
const get = require('lodash/get');
const pipeline = require('./pipeline');

exports.handler = async (event, context, callback) => {
  let response = {};
  try {
    const station = get(event, 'station', null);
    if (!station) throw new Error('No station property given');
    response.data = await pipeline(station);
  } catch (error) {
    console.log(error);
    callback(error, null);
  }
  callback(null, response)
};
