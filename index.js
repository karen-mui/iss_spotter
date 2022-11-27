const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

fetchCoordsByIP('2607:fea8:a35d:8500:fc51:f69c:60ef:bef1', (error, coords) => {
  if (error) {
    console.log(error);
    return;
  }

  console.log(coords);
  
});

// fetchISSFlyOverTimes({ latitude: '49.27670', longitude: '2323123.1' }, (error, flyOverTime) => {
// console.log(error)
// console.log(flyOverTime)
// })

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  printPassTimes(passTimes);
});