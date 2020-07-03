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
      console.log(apiResponse);
      if (typeof apiResponse != 'object') {
        $(".#results").html(`There has been an error processing your request: ${apiResponse}.`);
      } else if (otherCurrency === "AED") {
        let convertedAmount = usd * (apiResponse.conversion_rates.AED);
        $("#results").text(convertedAmount);
      } else if (otherCurrency === "ARS") {
        let convertedAmount = usd * (apiResponse.conversion_rates.ARS);
        $("#results").text(convertedAmount);
      } else if (otherCurrency === "AUD") {
        let convertedAmount = usd * (apiResponse.conversion_rates.AUD);
        $("#results").text(convertedAmount);
      } else if (otherCurrency === "BGN") {
        let convertedAmount = usd * (apiResponse.conversion_rates.BGN);
        $("#results").text(convertedAmount);
      } else if (otherCurrency === "BRL") {
        let convertedAmount = usd * (apiResponse.conversion_rates.BRL);
        $("#results").text(convertedAmount);
      } else if (otherCurrency !== "AED" || otherCurrency !== "ARS" || otherCurrency !== "AUD" || otherCurrency !== "BGN" || otherCurrency !== "BRL") {
        $("#results").text("This currency exchanger does not support that particular currency. Please select another.");
      } 
    })();
  });
});
