# JetCrypto API Sandbox

> This JetCrypto API Sandbox was developed based on the JetCrypto (Swagger) API and is to be used for development purposes ONLY. __PLEASE NOTE:__ Only a limited subset of api calls are currently supported, as required for active development projects; however, more api calls can be added as needed.

### JetCrypto Telr Endpoint

`https://jetcrypto.telr.host`

### Supported Requests

1. __/api/Account/:id__ — Receive account record from directory.

2. __/api/Balance__ — Receive account balance.

3. __/api/Trading/Info__ — Receive ALL pricing info from currently active pairs.

4. __/api/Trading/MarketOrders__ — Receive ALL open buy / sell orders for the specified trade pair.

5. __/api/Trading/OrderInfo__ — Receive order status.

### Supported Commands

1. __/api/Trading/Trade__ — Create an order and trade on the exchange.

2. __/api/Trading/RemoveOrder__ — Remove an order from the exchange.
