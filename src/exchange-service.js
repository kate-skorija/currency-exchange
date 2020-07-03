export async function getRates() {
  let response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
  let jsonifiedResponse;
  if (!response.ok) {
    jsonifiedResponse = response.statusText;
  } else {
    jsonifiedResponse = await response.json();
  }
  return jsonifiedResponse;
}

// export async function getRates() {
//   let response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
//   let jsonifiedResponse;
//   if (response.ok && response.status == 200) {
//     jsonifiedResponse = await response.json();
//   } else {
//     jsonifiedResponse = response.statusText;
//   }
//   return jsonifiedResponse;
// }