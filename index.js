const moment = require('moment')
const express = require('express')
const app = express()
const port = 80

app.use(express.json())

// exports.simpleTest = function (x) {
//   return 2 * x
// }

/**
 * Error handler.
 */
const _error = function (_msg) {
    console.error(_msg)

    // TODO: Report error to system adminstrators.
}

/**
 * API Welcome Screen
 *
 * TODO: Provide basic usage instructions.
 */
app.get('/', (req, res) => {
    res.send(`
        <h3>Hello JetCrypto!</h3>
        <a href="https://github.com/modenero/jetcrypto-api-sandbox">
        https://github.com/modenero/jetcrypto-api-sandbox</a>
    `)
})

/**
 * api/Account/:id
 *
 * Receive account record from directory.
 */
app.get('/api/Account/:id', (req, res) => {
    /* Set account id. */
    const id = req.params.id

    /* Validate account id. */
    if (id) {
        // TODO
    } else {
        return _error('Oops! That ID is invalid.')
    }

    /* Set last update. */
    const lastUpdate = moment().unix()

    /* Build (sample) package. */
    const pkg = { id, lastUpdate }

    /* Send response. */
    res.json(pkg)
})

/**
 * api/Balance
 *
 * Receive account balance.
 */
app.get('/api/Balance', (req, res) => {
    /* Set (sample) balance. */
    const balance = 12345

    /* Set last update. */
    const lastUpdate = moment().unix()

    /* Build (sample) package. */
    const pkg = { balance, lastUpdate }

    /* Send response. */
    res.json(pkg)
})

/**
 * api/Trading/Info
 *
 * Receive ALL pricing info from currently active pairs.
 */
app.get('/api/Trading/Info', (req, res) => {
    /* Set (sample) trading info. */
    const tradeInfo = {
        pair: 'BTC/USDC',
        last: 123000000
    }

    /* Set last update. */
    const lastUpdate = moment().unix()

    /* Build (sample) package. */
    const pkg = { tradeInfo, lastUpdate }

    /* Send response. */
    res.json(pkg)
})

/**
 * api/Trading/MarketOrders
 *
 * Receive ALL open buy / sell orders for the specified trade pair.
 */
app.get('/api/Trading/MarketOrders', (req, res) => {
    /* Set (sample) market orders. */
    const marketOrders = [{
        orderId: 12345,
        pair: 'BTC/USDC',
        amount: 1000000
    }]

    /* Set last update. */
    const lastUpdate = moment().unix()

    /* Build (sample) package. */
    const pkg = { marketOrders, lastUpdate }

    /* Send response. */
    res.json(pkg)
})

/**
 * api/Trading/OrderInfo
 *
 * Receive order status.
 */
app.get('/api/Trading/OrderInfo', (req, res) => {
    /* Set (sample) order info. */
    const orderInfo = {
        id: 12345,
        status: 'active'
    }

    /* Set last update. */
    const lastUpdate = moment().unix()

    /* Build (sample) package. */
    const pkg = { orderInfo, lastUpdate }

    /* Send response. */
    res.json(pkg)
})

/**
 * api/Trading/Trade
 *
 * Create an order and trade on the exchange.
 */
app.post('/api/Trading/Trade', (req, res) => {
    /* Set (sample) success. */
    const success = true

    /* Set last update. */
    const lastUpdate = moment().unix()

    /* Build (sample) package. */
    const pkg = { success, lastUpdate }

    /* Send response. */
    res.json(pkg)
})

/**
 * api/Trovemat/Payment
 *
 * Create a NEW Trovemat Payment.
 */
app.post('/api/Trovemat/Payment', (req, res) => {
    /* Require slack. */
    const Slack = require('slack')

    // console.log(req);
    // console.log('BODY', req.body);

    const token = process.env.SLACK_BOT_TOKEN
    console.log('SLACK_BOT_TOKEN', token)

    const bot = new Slack({ token })

    const channel = '#telr'

    const text = '*Telr Bot Notification*\n'

    const reqBody = '```' + JSON.stringify(req.body, null, 4) + '```'

    const attachments = [
        {
            "pretext": "*Package Submitted to JetCrypto API",
            "text": reqBody
        }
    ]

    ;(async function main() {
        var result = await bot.chat.postMessage({
            token, channel, text, attachments
        })

        console.log(result)
    })()

    /* Set (sample) success. */
    const success = true

    /* Set last update. */
    const lastUpdate = moment().unix()


    /* Build (sample) package. */
    const pkg = { success, lastUpdate }

    /* Send response. */
    res.json(pkg)
})

/**
 * api/Trading/RemoveOrder
 *
 * Remove an order from the exchange.
 */
app.post('/api/Trading/RemoveOrder', (req, res) => {
    /* Set (sample) success. */
    const success = true

    /* Set last update. */
    const lastUpdate = moment().unix()

    /* Build (sample) package. */
    const pkg = { success, lastUpdate }

    /* Send response. */
    res.json(pkg)
})

/* Start listener. */
app.listen(port, () => {
    console.log(`JetCrypto API Sandbox listening on port ${port}!`)
})
