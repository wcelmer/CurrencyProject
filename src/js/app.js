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

    function calcAll() {

      var selectCurrency = $('#SelectCurrency').val();
      var selectChange = $('#SelectChange').val();
      var amount = $('#amount').val();
      var finalPrice = $('#finalPrice');
      var finalAmount = $('#finalAmount');


      //Euro klient kupuje poniżej 1k
      if (selectCurrency == 1 && selectChange == 1 && amount < 1000) {
        let price = Number(Number(EurCurr.text()) + 0.0145).toFixed(4);
        finalPrice.attr("placeholder", price);
        finalAmount.attr("placeholder", Number(price*amount).toFixed(2));
        //funt klient kupuje poniżej 1k
    } else if (selectCurrency == 2 && selectChange == 1 && amount < 1000) {
      let price = Number(Number(GbpCurr.text()) + 0.0145).toFixed(4);
      finalPrice.attr("placeholder", price);
      finalAmount.attr("placeholder", Number(price*amount).toFixed(2));
      //dolar klient kupuje poniżej 1k
    } else if (selectCurrency == 3 && selectChange == 1 && amount < 1000) {
      let price = Number(Number(UsdCurr.text()) + 0.0145).toFixed(4)
      finalPrice.attr("placeholder", price);
      finalAmount.attr("placeholder", Number(price*amount).toFixed(2));
      //Euro klient sprzedaje poniżej 1k
    } else if (selectCurrency == 1 && selectChange == 2 && amount < 1000) {
      let price = Number(Number(EurCurr.text()) - 0.0145).toFixed(4);
      finalPrice.attr("placeholder", price);
      finalAmount.attr("placeholder", Number(price*amount).toFixed(2));
      //funt klient sprzedaje poniżej 1k
    } else if (selectCurrency == 2 && selectChange == 2 && amount < 1000) {
      let price = Number(Number(GbpCurr.text()) - 0.0145).toFixed(4);
      finalPrice.attr("placeholder", price);
      finalAmount.attr("placeholder", Number(price*amount).toFixed(2));
      //dolar klient sprzedaje poniżej 1k
    } else if (selectCurrency == 3 && selectChange == 2 && amount < 1000) {
      let price = Number(Number(UsdCurr.text()) - 0.0145).toFixed(4)
      finalPrice.attr("placeholder", price);
      finalAmount.attr("placeholder", Number(price*amount).toFixed(2));
      //euro klient kupuje powyzej 1k
    } else if (selectCurrency == 1 && selectChange == 1 && amount >= 1000) {
      let price = Number(Number(EurCurr.text()) + 0.0112).toFixed(4);
      finalPrice.attr("placeholder", price);
      finalAmount.attr("placeholder", Number(price*amount).toFixed(2));
      //funt klient kupuje powyzej 1k
    } else if (selectCurrency == 2 && selectChange == 1 && amount >= 1000) {
      let price = Number(Number(GbpCurr.text()) + 0.0112).toFixed(4);
      finalPrice.attr("placeholder", price);
      finalAmount.attr("placeholder", Number(price*amount).toFixed(2));
      //dolar klient kupuje powyzej 1k
    } else if (selectCurrency == 3 && selectChange == 1 && amount >= 1000) {
      let price = Number(Number(UsdCurr.text()) + 0.0112).toFixed(4)
      finalPrice.attr("placeholder", price);
      finalAmount.attr("placeholder", Number(price*amount).toFixed(2));
      //Euro klient sprzedaje powyzej 1k
    } else if (selectCurrency == 1 && selectChange == 2 && amount >= 1000) {
      let price = Number(Number(EurCurr.text()) - 0.0112).toFixed(4);
      finalPrice.attr("placeholder", price);
      finalAmount.attr("placeholder", Number(price*amount).toFixed(2));
      //funt klient sprzedaje powyzej 1k
    } else if (selectCurrency == 2 && selectChange == 2 && amount >= 1000) {
      let price = Number(Number(GbpCurr.text()) - 0.0112).toFixed(4);
      finalPrice.attr("placeholder", price);
      finalAmount.attr("placeholder", Number(price*amount).toFixed(2));
      //dolar klient sprzedaje powyzej 1k
    } else if (selectCurrency == 3 && selectChange == 2 && amount >= 1000) {
      let price = Number(Number(UsdCurr.text()) - 0.0112).toFixed(4)
      finalPrice.attr("placeholder", price);
      finalAmount.attr("placeholder", Number(price*amount).toFixed(2));
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
