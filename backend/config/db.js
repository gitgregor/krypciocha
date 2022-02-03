const mongoose = require('mongoose')


const connectDB = async () => {

    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        console.log(`MongoDB connected: ${conn.connection.host} `)

    } catch (error) {
        console.error(`it thorws an Error !!!: ${error.message}`)
        process.exit(1);
    }

}

module.exports = connectDB