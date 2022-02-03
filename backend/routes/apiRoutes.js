var express = require("express");
const coingecko = require('../../cryptoapis/coingecko.js');
const geckoModel = require('../models/geckoModel')

const router = express.Router();

router.get("/gecko", function (req, res) {

    const getGecko = async () => {

        // wysałane z zassedowanej  bazy

        const geckoGlobal = await geckoModel.find({})
        // console.log(geckoGlobal)

        const geckoGlobalCode = geckoGlobal.map(item => item.code)
        const geckoGlobalMessage = geckoGlobal.map(item => item.message)
        // console.log(geckoGlobal)
        res.send({
            code: geckoGlobalCode,
            message: geckoGlobalMessage
        })

        //wysłane przez res.send bezpośrednio z klienta coingecko api node

        // const data = coingecko().then(x => {
        //     console.log(x.code)
        //     res.send({
        //         code: x.code,
        //         message: x.message
        //     })
        // }
        // )
    }

    getGecko()
});


// @desc    Create a product


router.post('/gecko', (req, res) => {

    const createGecko = async () => {

        const data = async () => {
            const dat = await coingecko().then(x => x.code)

            const geckoGlobal = new geckoModel({
                code: dat,
                message: 'save to DmongoB from Gecko !!!',
            })

            console.log(dat)

            const createdGecko = await geckoGlobal.save()
            res.status(201).send(createdGecko)
        }
        data()

    }

    createGecko()
})

// router.post('/gecko', (req, res) => {

//     const createGecko = async () => {
//         const geckoGlobal = new geckoModel({
//             code: 0,
//             message: 'message save to DB from gecko',

//         })

//         const createdGecko = await geckoGlobal.save()
//         res.status(201).send(createdGecko)
//     }

//     createGecko()
// })





module.exports = router;