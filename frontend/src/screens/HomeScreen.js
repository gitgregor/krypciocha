import React, { useState, useEffect } from 'react'
import axios from 'axios'


const HomeScreen = () => {


 // state of data saveing in useState: gecko BTC price, marketcap, volumen
  const [geckoChartBTCdataPrice, setBtcPrice] = useState([])
  const [geckoChartBTCdataMarketCap, setBtcMarketCap] = useState([])
  const [geckoChartBTCdataVolumes, setBtcVolumes] = useState([])

 const GetGeckoBTC = async () => {
   const {data} =await axios.get("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=3&interval=daily")
   const {prices, market_caps, total_volumes} = data
    // console.log(prices)
    // console.log(prices[1][0])
    // console.log(prices[3][1])

    setBtcPrice(prices)
 }

 function timeConverter(unix_timestamp){
   var date = new Date(unix_timestamp * 1000);
   var iso = date.toISOString().match(/(\d{2}:\d{2}:\d{2})/)
   var isodate = iso.slice(1,5)
   return isodate
   // const formattedTime =new Date(unix_timestamp * 1000).toISOString().slice(0, 19).replace('T', ' ')
}

  useEffect(() => {
    GetGeckoBTC()
  }, [])

  return (
    <>
       {/* {geckoChartBTCdata && console.log(geckoChartBTCdata)} */}
      <h1>BTC statistics</h1>
             <hr></hr>
             <div className="maincontainer">
               <div className="container">
            { 
            geckoChartBTCdataPrice && geckoChartBTCdataPrice.map(time=>time[0])
            .map((x, index) =><div key={index} className="inbox">{timeConverter(x)}</div>)
            }  
      </div>
              <hr></hr>
      <div className="container">
         {geckoChartBTCdataPrice && geckoChartBTCdataPrice.map(price=>price[1])
         .map((x, index)=><div key={index} className="inbox">{x} </div>)
         } 
      </div> 
             </div>
      
            <hr></hr>
    </>
  )
}

export default HomeScreen

 // --- 1 ---
  // ---- get btc prices, marketcap and volumen
  // Get historical market data include price, market cap, 
  // and 24h volume (granularity auto)
  // Minutely data will be used for duration within 1 day, 
  // Hourly data will be used for duration between 1 day and 90 days,
  // Daily data will be used for duration above 90 days.

  // {
  //   "prices": [
  //     [
  //       1644278400000,
  //       43910.929986443094
  //     ],
  //     [
  //       1644517091000,
  //       45215.1910030524
  //     ]
  //   ],
  //   "market_caps": [
  //     [
  //       1644278400000,
  //       833392518214.8341
  //     ],
  //     [
  //       1644517091000,
  //       859806330124.3608
  //     ]
  //   ],
  //   "total_volumes": [
  //     [
  //       1644278400000,
  //       24171856714.475758
  //     ],
  //     [
  //       1644517091000,
  //       26820428625.09217
  //     ]
  //   ]
  // }

  // https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=3&interval=daily

  // curl -X 'GET' \
  // 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=3&interval=daily' \
  // -H 'accept: application/json'


  //==============================================





//***************************************************** */
// OLD working version ==============================

// const HomeScreen = () => {
//   const [geckoBTC, setGeckoBTC] = useState([])

//   // POST request
//   const createGeckoBTC = async () => {
  //     await axios.post('http://localhost:5000/api/geckobtc', {})
  //   }
  
//   // GET request
//   const getGeckoBTC = async () => {
//     const { data } = await axios.get('http://localhost:5000/api/geckobtc')
//     setGeckoBTC(data)
//   }

//   useEffect(() => {
//     getGeckoBTC()
//     createGeckoBTC()
//   }, [])

//   return (
//     <>
//       {console.log(geckoBTC.BTC_marketcap)}
//       <h1>BTC Marketcap</h1>
//       <hr></hr>
//       <div className="container">
//         {geckoBTC ? [geckoBTC.BTC_marketcap].map((mc, index) => <div className="inbox" key={index}>{mc}</div>) : "wait for the data ..."}
//       </div>

//       <hr></hr>
//     </>
//   )
// }