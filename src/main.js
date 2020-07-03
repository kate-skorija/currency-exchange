import { getRates } from './exchange-service.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    // const usd = parseInt($("#usdInput").val());
    // const otherCurrency = $("#otherCurrency").val();

    (async () => {
      const apiResponse = await getRates();
      console.log(apiResponse);
      if(!apiResponse) {
        $(".errors").html(`There has been an error processing your request.`)
      } else {
        $("#results").text(apiResponse.conversion_rates.AED);
      }
    })();
  });
});
