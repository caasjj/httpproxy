Proxy Server Test

1. Clone this repo
2. `npm install`
3. start main server: `node proxyreceiver.js`
4. start proxy server: `node proxyserver.js`
5. In browser, navigate to' `http://localhost:8014`

The proxy server will proxy the HTTP to the main server which will download `index.html` to the client.
There is javascript there to connect to the proxy server via `ws`, which will be proxied to the main server as well.