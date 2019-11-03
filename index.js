const express = require('express')
const app = express()
const port = 80

exports.simpleTest = function (x) {
  return 2 * x
}

app.get('/', (req, res) => res.send('Hello JetCrypto!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
