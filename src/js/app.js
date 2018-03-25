var EurUrl = 'http://api.nbp.pl/api/exchangerates/rates/a/eur/?format=json';
var GbpUrl = 'http://api.nbp.pl/api/exchangerates/rates/a/gbp/?format=json';
var UsdUrl = 'http://api.nbp.pl/api/exchangerates/rates/a/usd/?format=json';

//cache current show place
var EurCurr = $('#EUR');
var GbpCurr = $('#GBP');
var UsdCurr = $('#USD');

  function insertEur(response) {
    EurCurr.text(response.rates[0].mid)
  }
  function insertGbp(response) {
    GbpCurr.text(response.rates[0].mid)
  }
  function insertUsd(response) {
    UsdCurr.text(response.rates[0].mid)
  }

  function loadEUR() {

    $.ajax({
      url: EurUrl,
      dataType : 'json',
      type: 'GET'
    }).done(function (response) {
      insertEur(response);
    }).fail(function (error) {
      console.log(error);
    })
  }

  function loadGBP() {

    $.ajax({
      url: GbpUrl,
      dataType : 'json',
      type: 'GET'
    }).done(function (response) {
      insertGbp(response);
    }).fail(function (error) {
      console.log(error);
    })
  }

  function loadUSD() {

    $.ajax({
      url: UsdUrl,
      dataType : 'json',
      type: 'GET'
    }).done(function (response) {
      insertUsd(response);
    }).fail(function (error) {
      console.log(error);
    })
  }

  loadEUR();
  loadUSD();
  loadGBP();


    //Calculator

    var checkCurrBtn = $('#checkCurr');

    function calcAll() {

      var selectCurrency = $('#SelectCurrency').val();
      var selectChange = $('#SelectChange').val();
      var amount = $('#amount').val();
      var finalPrice = $('#finalPrice');
      var finalAmount = $('#finalAmount');

      function currencyCalc(direction, currency, amount) {
        let diff = amount > 1000 ? 0.0112 : 0.0145;
        let value = Number($('#'+currency).text());
        if (direction === 'buy'){
          let price = Number(value - diff).toFixed(4);
          finalPrice.attr("placeholder", price);
          finalAmount.attr("placeholder", Number(price*amount).toFixed(2));
        } else {
          let price = Number(value + diff).toFixed(4);
          finalPrice.attr("placeholder", price);
          finalAmount.attr("placeholder", Number(price*amount).toFixed(2));
        }
      }

    if (selectCurrency == 'EUR' && selectChange == 'buy') {
      currencyCalc(selectChange, selectCurrency, amount);

    } else if (selectCurrency == 'GBP' && selectChange == 'buy') {
      currencyCalc(selectChange, selectCurrency, amount);

    } else if (selectCurrency == 'USD' && selectChange == 'buy') {
      currencyCalc(selectChange, selectCurrency, amount);

    } else if (selectCurrency == 'EUR' && selectChange == 'sell') {
      currencyCalc(selectChange, selectCurrency, amount);

    } else if (selectCurrency == 'GBP' && selectChange == 'sell') {
      currencyCalc(selectChange, selectCurrency, amount);

    } else if (selectCurrency == 'USD' && selectChange == 'sell') {
      currencyCalc(selectChange, selectCurrency, amount);
    }
  }

    checkCurrBtn.on('click', calcAll);



  // Google Maps

  function initMap() {

      var uluru = {lat: 52.3979493, lng: 17.2261939};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: uluru
      });
      var marker = new google.maps.Marker({
        position: uluru,
        map: map
      });
    }

  initMap();














  //bla
