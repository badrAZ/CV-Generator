import bodyParser from 'body-parser'
import express from 'express'

import methods from './api'
import config from './config.json'

const app = express()

// create application/json parser (req.body)
const jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser (req.body.username))
// const urlencodedParser = bodyParser.urlencoded({ extended: false })

const handleCall = async (req, res) => {
  const { method, args } = req.body
  try {
    if (methods[method] === undefined) {
      throw new Error('method not found')
    }
    res.send(await methods[method](...args))
  } catch (error) {
    res.status(500).send(error)
    throw error
  }
}

app.post('/api', jsonParser, (req, res) =>
  handleCall(req, res).catch(console.error)
)

app.listen(config.port, () => {
  console.info(`Listening on port ${config.port}`)
})
