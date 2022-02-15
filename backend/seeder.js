// import mongoose from 'mongoose'
// import dotenv from 'dotenv'
// import users from './data/users.js'
// import products from './data/products.js'
// import User from './models/userModel.js';
// import Product from './models/productModel.js'
// import Order from './models/orderModel.js'

// import connectDB from './config/db.js'

const mongoose = require('mongoose')
const dotenv = require('dotenv')
const Gecko = require('./models/geckoModel')
const GeckoDerivatives = require('./models/geckoModelDerivatives')
const connectDB = require('./config/db')

dotenv.config()

connectDB()


const importData = async () => {
    try {
        // await Order.deleteMany()
        // await Product.deleteMany()
        // await User.deleteMany()
        await Gecko.deleteMany()

        // const createdUsers = await User.insertMany(users)

        // const adminUser = createdUsers[0]._id

        // const sampleProducts = products.map(product => {
        //     return { ...product, user: adminUser }
        // })

        await Gecko.insertMany({
            code: 999,
            message: 'It is OK'
        })

        console.log('Data Imported');
        process.exit()
    } catch (error) {
        console.error(`${error}`)
        // (1) means exit with failure
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        // await Order.deleteMany()
        // await Product.deleteMany()
        // await User.deleteMany()

        await Gecko.deleteMany()
        await GeckoDerivatives.deleteMany()

        console.log('Data Destroyed');
        process.exit()
    } catch (error) {
        console.error(`${error}`)
        process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}

// seeder.js : if you fire it off with -d parameter data will be destroyed:
// command: node backend/seeder -d
// process.argv[2] is exactly taht -d parameter