require('dotenv').config();
const axios = require('axios');

const stationName = 'ladywell';

const getData = async () => {
  return await axios.get('https://0snmtmpnm4.execute-api.eu-west-1.amazonaws.com/default/metrolink', {
    params: {
      station: stationName,
    }
  });
};

const printData = (data) => {
  console.log(`Times for ${stationName}`);
  console.log('==============');
  console.log('Incoming trams: ');
  
  data.incoming.forEach((tram, i) => {
    tram.wait.forEach((time, i) => {
      console.log(`${tram.destination} in ${time} minutes`);
    });
  });

  console.log('==============');
  console.log('Outgoing trams: ');
  
  data.outgoing.forEach((tram, i) => {
    tram.wait.forEach((time, i) => {
      console.log(`${tram.destination} in ${time} minutes`);
    });
  });

}

getData()
  .then(res => printData(res.data.data))
  .catch(err => console.log(err.response.data));