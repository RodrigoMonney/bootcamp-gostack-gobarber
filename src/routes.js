const { Router } = require('express')

const routes = new Router()

routes.get('/', (req, res) => {
  return res.json({ message: "I will work at EBANX" })
})

module.exports = routes;