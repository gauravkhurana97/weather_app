const request = require('request');

var geocodeAddress = (address, callback) => {
  var encodedAddress = encodeURIComponent(address);

  request({
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=7uFHkhoY77mUXuS8Rp2bfJkxOPytvqg4&location=${encodedAddress}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode===200)  {
      callback(undefined, {
        address: body.results[0].providedLocation.location,
        latitude: body.results[0].locations[0].latLng.lat,
        longitude: body.results[0].locations[0].latLng.lng
      });
    }
      else {
      callback('Unable to connect to Google servers.');
      }
  });
};

module.exports.geocodeAddress = geocodeAddress;
