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
      if (apiResponse instanceof Error) {
        $("#results").html(`There has been an error processing your request: ${apiResponse}.`);
      } else if (otherCurrency === "AED") {
        let convertedAmount = (usd * (apiResponse.conversion_rates.AED).toFixed(2));
        $("#results").text(`${convertedAmount} AED`);
      } else if (otherCurrency === "ARS") {
        let convertedAmount = (usd * (apiResponse.conversion_rates.ARS).toFixed(2));
        $("#results").text(`${convertedAmount} ARS`);
      } else if (otherCurrency === "AUD") {
        let convertedAmount = (usd * (apiResponse.conversion_rates.AUD).toFixed(2));
        $("#results").text(`${convertedAmount} AUD`);
      } else if (otherCurrency === "BGN") {
        let convertedAmount = (usd * (apiResponse.conversion_rates.BGN).toFixed(2));
        $("#results").text(`${convertedAmount} BGN`);
      } else if (otherCurrency === "BRL") {
        let convertedAmount = (usd * (apiResponse.conversion_rates.BRL).toFixed(2));
        $("#results").text(`${convertedAmount} BRL`);
      } else if (otherCurrency !== "AED" || otherCurrency !== "ARS" || otherCurrency !== "AUD" || otherCurrency !== "BGN" || otherCurrency !== "BRL") {
        $("#results").text("This currency exchanger does not support that particular currency. Please select another.");
      } 
    })();
  });
});
