import React, { useState, useEffect } from 'react'
// import { Row, Col } from 'react-bootstrap'

import axios from 'axios'


const HomeScreen = () => {
  const [gecko, setGecko] = useState([])
  // const [createGecko, setCreateGecko] = useState([])

  useEffect(() => {

    const fetchGecko = async () => {
      const { data } = await axios.get('http://localhost:5000/api/gecko')
      setGecko(data)
    }
    fetchGecko()

    const createGecko = async () => {
      const { data } = await axios.post('http://localhost:5000/api/gecko', {

      })
      // setGecko(data)
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
