const axios = require('axios');

const getData = async (stationName) => {
  return await axios.get('https://0snmtmpnm4.execute-api.eu-west-1.amazonaws.com/default/metrolink', {
    params: {
      station: stationName,
    }
  });
};

const printData = (data, stationName) => {
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

if (process.argv[2]) {
  getData(process.argv[2])
    .then(res => printData(res.data.data, process.argv[2]))
    .catch(err => console.log(err.response.data.error));
} else {
  console.log('Please enter a station name after calling tram-finder');
  console.log("For example: 'tram-finder ladywell' or 'tram-finder piccadilly-gardens'");
}
