const request = require('request');
const weatherApiKey = 'e084c48223bf78ff04bf355894d6253c';
const geocodeApiKey = 'I73WjZUtrHacvmxG60flVrzeqsEmHULZ';

const geocode = (locationStr, callback) => {
  const url = `http://www.mapquestapi.com/geocoding/v1/address?key=${geocodeApiKey}&location=${locationStr}&maxResults=1`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      console.log(error);
    } else {
      callback(body.results[0].locations[0].latLng);
    }
  })
};

const getWeather = (latLngObj) => {
  const url = ` http://api.openweathermap.org/data/2.5/weather?lat=${latLngObj.lat}&lon=${latLngObj.lng}&units=imperial&appid=${weatherApiKey}`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`It's ${body.main.temp}° out there!`);
    }
  });
};

export default geocode;