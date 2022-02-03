import React, { useState, useEffect } from 'react'
import axios from 'axios'


const HomeScreen = () => {
  const [geckoBTC, setGeckoBTC] = useState([])

  useEffect(() => {

    // POST request 
    const createGeckoBTC = async () => {
      await axios.post('http://localhost:5000/api/geckobtc', {})
    }
    createGeckoBTC()

    // GET request
    const getGeckoBTC = async () => {
      const { data } = await axios.get('http://localhost:5000/api/geckobtc')
      setGeckoBTC(data)
    }
    getGeckoBTC()


  }, [])

  return (
    <>
      <h1>BTC Marketcap</h1>
      <hr></hr>
      <div>
        {geckoBTC.BTC_marketcap}
      </div>
    </>
  )
}

export default HomeScreen
