//1. Import coingecko-api
const CoinGecko = require('coingecko-api');

//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();

//3. Make calls
var gecko = async () => {
    // let data = await CoinGeckoClient.coins.fetch('bitcoin', {});
    let data = await CoinGeckoClient.global();
    // console.log(data);
    return data
};

gecko()

module.exports = gecko