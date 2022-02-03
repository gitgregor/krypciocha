
const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const apiRouter = require("./routes/apiRoutes")
const connectDB = require('./config/db')

dotenv.config()
connectDB()

const app = express()

app.use(cors())

app.use("/api", apiRouter);



const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`))


