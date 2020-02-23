var last = function last(array, n) {
  if (array == null) return void 0;
  if (n == null) return array[array.length - 1];
  return array.slice(Math.max(array.length - n, 0));
};

var refreshall = function refreshall(lastten) {
  $('.Time').each(function(index) {
    var d = new Date(lastten[index][0]);
    $(this).html(d);
  });
  $('.rate').each(function(index) {
    $(this).html(lastten[index][1]);
  });
  console.log('refreshing');
};
var lastten;

var apiurl =
  'http://cors-anywhere.herokuapp.com/https://www.bloomberght.com/piyasa/intradaydata/dolar';

function getData() {
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
      var series = data.SeriesData;
      lastten = last(series, 10);
      refreshall(lastten);
    }
  });
}

$('#refresh').click(function() {
  getData(lastten);
});

$(function() {
  getData();
});
