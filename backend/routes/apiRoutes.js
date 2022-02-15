
const express = require("express");
const coingeckoAPI = require('../../cryptoapis/coingecko.js');
const geckoModel = require('../models/geckoModel')
const geckoModelDerivatives = require('../models/geckoModelDerivatives')

const router = express.Router();

/**
 * ======= POST region ===========
 */

// @desc POST : coinBTC SPOT
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

// @desc POST : save in DB derivatives from Binanace by coinGecko API requested from React axios POST

router.post('/geckoDerivatives/:price', (req, res) => {

    const createDerivativesDocumentInDB = async () => {


        const geckoDerivatives = new geckoModelDerivatives({
            price: req.params.price
        })

        console.log(req.params.price)
        const createdGecko = await geckoDerivatives.save()
        res.status(201).send(createdGecko)


        //const geckoDerivatives = new geckoModelDerivatives({
        //     price: req.params.price
        // })

        // console.log(req.params.price)
        // const createdGecko = await geckoDerivatives.save()
        // res.status(201).send(createdGecko)



    }
    createDerivativesDocumentInDB()
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