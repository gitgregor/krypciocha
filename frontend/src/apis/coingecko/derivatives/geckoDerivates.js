import React, { useState, useEffect } from 'react'
import axios from 'axios'


const GetDerivatives = () => {

    /**
     *   state of data saveing in useState: derivatives data for  Binance
     *   from Coingecko API
     */
    const [geckoDerivativesBinance, setGeckoDerivativesBinance] = useState([])

    /**
     *  Get derivatives data from Binance - market index: data[0]
     *  using Coingecko API
     */
    const GetDerivatives = async () => {

        const { data } = await axios.get("https://api.coingecko.com/api/v3/derivatives",
            {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            }
        )
        console.log(data[0]);
        // to dziła tylko z React renderrowaniem w sekcji gdzie jest return z komponentami
        setGeckoDerivativesBinance(data[0])

        // tu nie działa useEffect i console.log(geckoDerivativesBinance.index) is undefined, dlatego musimy zdestrukturyzować jak niżej : const { index } = data[0]
        // console.log(geckoDerivativesBinance.index)

        const { index } = data[0]
        console.log(index)

        await axios.post(`http://localhost:5000/api/geckoDerivatives/${index}`,

            // await axios.post('http://localhost:5000/api/geckoDerivatives', { price: geckoDerivativesBinance.index },

            {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            }
        )


    }


    /** 
     * Save derivatives from Binanace/Coingecko API data in Database
     * POST reqest 
    */
    const createDerivativesDocumentInDB = async () => {



        const data = geckoDerivativesBinance.index
        console.log(data)

        await axios.post(`http://localhost:5000/api/geckoDerivatives/${111}`,

            // await axios.post('http://localhost:5000/api/geckoDerivatives', { price: geckoDerivativesBinance.index },

            {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            }
        )



    }


    /**
     * Funcion converting unix timestamp on UTC time
     */
    function timeConverter(unix_timestamp) {
        var date = new Date(unix_timestamp * 1000);
        var iso = date.toISOString().match(/(\d{2}:\d{2}:\d{2})/)
        // var isodate = iso.slice(1, 5)
        // return isodate
        return iso
        // const formattedTime =new Date(unix_timestamp * 1000).toISOString().slice(0, 19).replace('T', ' ')
    }

    /**
     * function repeatedly invoking getting derivatives data in every 5 second
     */
    const Sequencer = () => {
        setTimeout(() => {
            GetDerivatives()
        }, 60000);
    }

    /**
     * running code when changes in query apeared
     */
    useEffect(() => {
        // GetDerivatives()
        Sequencer()
        // createDerivativesDocumentInDB()
    }, [Sequencer])
    // }, [Sequencer, createDerivativesDocumentInDB])

    return (
        <>
            {/* {console.log(geckoDerivativesBinance.index)} */}
            <div className="container">
                {geckoDerivativesBinance && [geckoDerivativesBinance].map((handle, idx) => <div key={idx} className="inbox">{handle.index}</div>)}
            </div>
            <div className="container">
                {geckoDerivativesBinance && [geckoDerivativesBinance].map((handle, idx) => <div key={idx} className="inbox">{Date(handle.last_traded_at * 1000)}</div>)}
            </div>
        </>
    )
}

export default GetDerivatives
