// import mongoose from 'mongoose'
const mongoose = require('mongoose')

const geckoSchema = mongoose.Schema({
    code: {
        type: Number,
    },
    message: {
        type: String,
    },

}, {
    timestamps: true
})

const Gecko = mongoose.model('Gecko', geckoSchema)

// export default Gecko
module.exports = Gecko