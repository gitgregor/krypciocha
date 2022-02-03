//1. Import coingecko-api
const CoinGecko = require('coingecko-api');

//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();

//3. Make calls
var gecko = async () => {
    let datax = await CoinGeckoClient.coins.fetch('bitcoin', {});
    // let data = await CoinGeckoClient.global();
    // console.log(datax);
    // return data
    return datax
};

gecko()

module.exports = gecko