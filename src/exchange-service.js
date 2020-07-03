export async function getRates() {
  try {
    let response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
    let jsonifiedResponse = await response.json();
    return jsonifiedResponse;
  } catch(error) {
    return error;
  }
}

// try {
//   let response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latst/USD`);
//   let jsonifiedResponse;
  
//   if (response.ok && response.status == 200) {
//     jsonifiedResponse = await response.json();
//   } else {
//     jsonifiedResponse = false;
//   }
//   return jsonifiedResponse;
// } catch(error) {
//   return error;
// }

// try {
//   let response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latst/USD`);
//   let jsonifiedResponse;
  
//   if (!response.ok) {
//     jsonifiedResponse = await response.json();
//   } else {
//     jsonifiedResponse = await response.json();
//   }
//   return jsonifiedResponse;
// } catch(error) {
//   return error;
// }
