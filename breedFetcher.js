const request =  require('request');


const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    const data = JSON.parse(body);
    if (data[0]) {
      callback(null, data[0].description);
    } else {
      callback('Breed Not Found');
    }
  //console.log('statusCode:', response && response.statusCode);
  //console.log("data:",data);
  //console.log("type of", typeof data);
  });
};
module.exports = { fetchBreedDescription };
