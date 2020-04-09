const request =  require('request');
const args = process.argv.slice(2);
console.log(args);

request(`https://api.thecatapi.com/v1/breeds/search?q=${args}`, (error, response, body) => {
  if (error) {
    console.log('error:', error);
  }
  const data = JSON.parse(body);
  if (data[0]) {
    console.log(data[0].description);
  } else {
    console.log('Breed Not Found');
  }
  //console.log('statusCode:', response && response.statusCode);
  //console.log("data:",data);
  //console.log("type of", typeof data);
});
