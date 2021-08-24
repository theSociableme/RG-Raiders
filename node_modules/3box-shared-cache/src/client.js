const { caller } = require('postmsg-rpc')
const { Store } = require('./levelDownProxy')
const OrbitDbStorageAdapter = require('orbit-db-storage-adapter')
const LevelUp = require('levelup')
const LevelStore = require('datastore-level')

const createOrbitStorageProxy = async (path, { postMessage }) => {
  const db = (path, opts) => {
    const levelDownProxy = new Store(path, Object.assign(opts, { postMessage }))
    return LevelUp(levelDownProxy)
  }
  const storage = OrbitDbStorageAdapter(db, {})

  return storage.createStore(path)
}

const cacheSupported = async (opts) => caller('supported', opts)()

const createIpfsStorageProxy = ({ postMessage }) => {
  return function store (path, opts) {
    const db = (path, opts) => {
      const levelDownProxy = new Store(path, Object.assign(opts, { postMessage }))
      return LevelUp(levelDownProxy)
    }
    return new LevelStore(path, { db })
  }
}

export {
  createOrbitStorageProxy,
  createIpfsStorageProxy,
  cacheSupported
}
