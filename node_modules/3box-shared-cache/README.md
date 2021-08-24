# 3box-shared-cache
"The shared cache module that 3box uses to share cache across domains using an iframe

## API

To proxy orbitdb storage or ipfs storage
```
const { createOrbitStorageProxy, createIpfsStorageProxy } = require('3box-shared-cache')

const proxiedOrbitDbStorage = createOrbitStorageProxt({ postMessage }) // pass proper postMessage instance, (e.g: iframe.contentWindow.postMessage to communicate with iframe)

// pass proxied orbitdb storage to orbit-db-cache or orbit-db-keystore or directly as a storage layer

const proxiedIpfsStorage = createIpfsStorageProxy({ postMessage }) // pass proper postMessage instance, (e.g: iframe.contentWindow.postMessage to communicate with iframe)

// pass proxied ipfs storage as db key in storageBackendOptions to ipfs repo options
```

Running the server in an iframe
```
const { createServer } = require('3box-shared-cache')

const server = createServer({ postMessage: window.parent.postMessage })
server.init() // initialises the server
server.start() // start the server
server.stop() // stop the server
```

## How to use with 3box-js

Make sure you have the option `iframeCache` enabled for 3box-js and make sure you define an environment variable `CACHE_IFRAME_URL` with the iframe server url

To launch the iframe server, execute:
```
$ npm run example:server:start
```

The server will run on `http://localhost:30001` by default.

## Maintainers
[@zachferland](https://github.com/zachferland)
