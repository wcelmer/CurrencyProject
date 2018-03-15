var EurUrl = 'http://api.nbp.pl/api/exchangerates/rates/a/eur/?format=json';
var GbpUrl = 'http://api.nbp.pl/api/exchangerates/rates/a/gbp/?format=json';
var UsdUrl = 'http://api.nbp.pl/api/exchangerates/rates/a/usd/?format=json';

//cache current show place
var EurCurr = $('#actualEurCurr');
var GbpCurr = $('#actualGbpCurr');
var UsdCurr = $('#actualUsdCurr');

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
    var selectCurrency = $('#SelectCurrency');
    var selectChange = $('#SelectChange');
    var finalPrice = $('#finalPrice');

    function calcAll() {
      if (selectCurrency.val() == 1 && selectChange.val() == 1) {
        finalPrice.attr("placeholder", Number(EurCurr.text()) + 0.015);
    } else if (selectCurrency.val() == 2 && selectChange.val() == 1) {
      finalPrice.attr("placeholder", Number(GbpCurr.text()) + 0.015);
    } else if (selectCurrency.val() == 3 && selectChange.val() == 1) {
      finalPrice.attr("placeholder", Number(UsdCurr.text()) + 0.015);
    } else if (selectCurrency.val() == 1 && selectChange.val() == 2) {
      finalPrice.attr("placeholder", Number(EurCurr.text()) - 0.015);
    } else if (selectCurrency.val() == 2 && selectChange.val() == 2) {
      finalPrice.attr("placeholder", Number(GbpCurr.text()) - 0.015);
    } else if (selectCurrency.val() == 3 && selectChange.val() == 2) {
      finalPrice.attr("placeholder", Number(UsdCurr.text()) - 0.015);
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
