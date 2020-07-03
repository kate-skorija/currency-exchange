export async function getRates() {
  try {
    let response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
    let apiResponse;
    if (response.ok && response.status == 200) {
      apiResponse = await response.json();
    } else {
      apiResponse = await response.statusText;
    }
    return apiResponse;
  } catch(error) {
    return error;
  }
}
