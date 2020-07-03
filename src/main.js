import { getRates } from './exchange-service.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    const usd = parseInt($("#usdInput").val());
    const otherCurrency = $("#otherCurrency").val();

    (async () => {
      const apiResponse = await getRates();
      if (apiResponse instanceof Error) {
        $("#results").html(`There has been an error processing your request: ${apiResponse}.`);
      } else {
        displayCurrency(apiResponse);
      }
    })(); 

    function displayCurrency(apiResponseParam) {
      let convertedAmount;
      const currencies = Object.keys(apiResponseParam.conversion_rates);
      if (!apiResponseParam.conversion_rates) {
        $("#results").html(`There has been an error processing your request: ${apiResponseParam}.`)
      } else if (!otherCurrency) {
        $("#results").text("This currency exchanger does not support that particular currency. Please select another.");
      } else {
        currencies.forEach(function(currency) {
          if (otherCurrency === currency) {
            convertedAmount = (usd * apiResponseParam.conversion_rates[currency]).toFixed(2);
            $("#results").html(`&rarr; ${convertedAmount} ${otherCurrency}`);
          }
        });
      }
    }
  });
});