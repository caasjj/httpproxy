Proxy Server Test

1. Clone this repo
2. `cd httpproxy`
3. `npm install`
4. start main server: `node proxyreceiver.js`
5. start proxy server: `node proxyserver.js`
6. In browser, navigate to' `http://localhost:8014`

The proxy server will proxy the HTTP to the main server which will download `index.html` to the client.
There is javascript there to connect to the proxy server via `ws`, which will be proxied to the main server as well.
