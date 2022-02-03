import React, { useState, useEffect } from 'react'
import axios from 'axios'


const HomeScreen = () => {
  const [gecko, setGecko] = useState([])

  useEffect(() => {

    // Fetch by axios.get to get coingecko data from DB
    const fetchGecko = async () => {
      const { data } = await axios.get('http://localhost:5000/api/gecko')
      setGecko(data)
    }
    fetchGecko()

    // POST request to create new record of coingecko on DB by express. Data at express is getting from coingecko api
    const createGecko = async () => {
      await axios.post('http://localhost:5000/api/gecko', {})
    }
    createGecko()

  }, [])

  return (
    <>
      <h1>Latest Products</h1>
      {console.log(gecko)}

      <div>
        {gecko.code}
      </div>

      <hr></hr>
      <div>
        {gecko.message}
      </div>
    </>
  )
}

export default HomeScreen
