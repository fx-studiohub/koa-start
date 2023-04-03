const combineRoutes = require('koa-combine-routers')
const aRouters = require('./aRouter')
const bRouters = require('./bRouter')

module.exports = combineRoutes(aRouters, bRouters)
