const mongoose = require('mongoose')

const geckoDerivativesSchema = mongoose.Schema({

    price: {
        type: Number,
    },

}, {
    timestamps: true
})

const GeckoDerivatives = mongoose.model('GeckoDerivatives', geckoDerivativesSchema)

module.exports = GeckoDerivatives