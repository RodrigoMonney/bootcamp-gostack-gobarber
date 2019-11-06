import { Router } from 'express'

const routes = new Router()

routes.get('/', (req, res) => {
  return res.json({ message: "I will work at EBANX!" })
})

export default routes;