const express = require('express')
const fetch = require('node-fetch');

const PORT = 3000

url = process.env.URL
if (url === undefined) {
  throw 'URL is undefined'
}

const app = express()

app.get('/', async (req, res) => {
  try {
    await fetch(url)
    res.send('Hello World!')
  } catch (error) {
    res.status(500).send()
  }
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})

