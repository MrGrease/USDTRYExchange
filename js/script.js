$(function() {
  var apiurl =
    'http://cors-anywhere.herokuapp.com/https://www.bloomberght.com/piyasa/intradaydata/dolar';

  $.ajax({
    url: apiurl,
    contentType: 'application/json',
    dataType: 'json',
    responseType: 'application/json',
    xhrFields: {
      withCredentials: false
    },
    headers: {
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'application/json'
    },
    success: function(data) {
      console.log(data);
    }
  });
});
