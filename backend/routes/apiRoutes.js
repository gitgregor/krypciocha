
const express = require("express");
const coingeckoAPI = require('../../cryptoapis/coingecko.js');
const geckoModel = require('../models/geckoModel')

const router = express.Router();

/**
 * ======= POST region ===========
 */

// @desc POST 
router.post('/geckobtc', (req, res) => {

    const createGeckoBTC = async () => {

        const geckoBTCdata = await coingeckoAPI()
            .then(item => item.data)
            .then(md => md.market_data)
            .then(mc => mc.market_cap)
            .then(quote => quote.usd)

        const geckoBTC = new geckoModel({
            BTC_marketcap: geckoBTCdata,
        })

        const createdGecko = await geckoBTC.save()
        res.status(201).send(createdGecko)
    }
    createGeckoBTC()
})

/**
 * =======END of POST region ===========
 */

/**
 * ======= GET region ===========
 */

// @desc GET
router.get("/geckobtc", function (req, res) {

    const getGeckoBTC = async () => {

        const geckoBTC = await geckoModel.find({})

        const geckoBTC_marketcap = geckoBTC.map(item => item.BTC_marketcap)

        res.send({
            BTC_marketcap: geckoBTC_marketcap,
        })
    }
    getGeckoBTC()
});

/**
 * ======= END of GET region ===========
 */



module.exports = router;