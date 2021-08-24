const { createServer } = require("../src/server")

const serverOpts = {
  postMessage: (...args) => {
    return window.parent.postMessage(...args)
  }
}

function runServer() {
  const server = createServer(serverOpts)
  server.init()
  server.start()
}

runServer()
