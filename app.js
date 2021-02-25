const express = require('express')
const app = express()
const routes = require('./routes')

app.use(routes)

// ROUTES, TEMP. ENGINES, e.t.c

module.exports = app;