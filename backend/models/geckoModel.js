const mongoose = require('mongoose')

const geckoSchema = mongoose.Schema({

    BTC_marketcap: {
        type: Number,
    },

}, {
    timestamps: true
})

const Gecko = mongoose.model('Gecko', geckoSchema)

module.exports = Gecko