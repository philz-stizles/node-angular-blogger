const express = require('express');
const { nextTick } = require('process');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Accesss-Control-Allow-Origin', '*')
    res.setHeader('Accesss-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.setHeader('Accesss-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE')
    next()
})

app.use('/api/posts', require('./routes/postRoutes'))

module.exports = app;