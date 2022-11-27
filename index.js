const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP('2607:fea8:a35d:8500:fc51:f69c:60ef:bef1', (error, coords) => {
//   if (error) {
//     console.log(error);
//     return;
//   }

//   console.log(coords);
  
// });

fetchISSFlyOverTimes({ latitude: '49.27670', longitude: '2323123.1' }, (error, flyOverTime) => {
console.log(error)
console.log(flyOverTime)
})