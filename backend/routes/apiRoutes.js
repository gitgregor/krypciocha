
const express = require("express");
const coingecko = require('../../cryptoapis/coingecko.js');
const geckoModel = require('../models/geckoModel')

const router = express.Router();

// @desc GET - send to React serviced by axios (get) the response with Database data requested by frontend axios GET. Before sen
router.get("/gecko", function (req, res) {

    const getGecko = async () => {
        // find records in Database
        const geckoGlobal = await geckoModel.find({})

        // map object to get simple value of specific key value pair
        const geckoGlobalCode = geckoGlobal.map(item => item.code)
        const geckoGlobalMessage = geckoGlobal.map(item => item.message)

        // data sended to client and will be destructered as a data at frontend
        res.send({
            code: geckoGlobalCode,
            message: geckoGlobalMessage
        })
    }
    getGecko()
});

// @desc POST  - create a coingecko record to Database
// from Coingecko API, requestet by frontend post axios service
router.post('/gecko', (req, res) => {

    const createGecko = async () => {

        const geckoData = await coingecko().then(item => item.code)

        const geckoGlobal = new geckoModel({
            code: geckoData,
            message: 'save to DmongoB from Gecko !!!',
        })
        console.log(geckoData)

        const createdGecko = await geckoGlobal.save()
        res.status(201).send(createdGecko)
    }
    createGecko()
})

module.exports = router;