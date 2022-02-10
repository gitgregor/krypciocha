import React, { useState, useEffect } from 'react'
import axios from 'axios'


const HomeScreen = () => {
  const [geckoBTC, setGeckoBTC] = useState([])

  // GET request
  const createGeckoBTC = async () => {
    await axios.post('http://localhost:5000/api/geckobtc', {})
  }

  // POST request 
  const getGeckoBTC = async () => {
    const { data } = await axios.get('http://localhost:5000/api/geckobtc')
    setGeckoBTC(data)
  }

  useEffect(() => {
    getGeckoBTC()
    createGeckoBTC()
  }, [])

  return (
    <>
      {console.log(geckoBTC.BTC_marketcap)}
      <h1>BTC Marketcap</h1>
      <hr></hr>
      <div className="container">
        {geckoBTC ? [geckoBTC.BTC_marketcap].map((mc, index) => <div className="inbox" key={index}>{mc}</div>) : "wait for the data ..."}
      </div>

      <hr></hr>
    </>
  )
}

export default HomeScreen
