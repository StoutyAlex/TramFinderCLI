const axios = require('axios');

module.exports = async () => {
  return await axios.get('https://api.tfgm.com/odata/Metrolinks', {
    headers: {
      // 'Ocp-Apim-Subscription-Key': process.env.metrolink_key, 
      'Ocp-Apim-Subscription-Key': '',
    }
  });
};