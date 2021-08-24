const { createClient } = require('../src')
const { getClientOpts, startRpcServer } = require('./testUtils')

const OrbitDbStorageAdapter = require('orbit-db-storage-adapter')
const OdbKeystore = require('orbit-db-keystore')
const OrbitDbCache = require('orbit-db-cache')

const levelup = require('levelup')
const OrbitDB = require('orbit-db')
const IPFSRepo = require('ipfs-repo')
const IPFS = require('ipfs')

describe.skip("Shared cache module", () => {  
  let ipfs, orbitdb, ClientStore, db, rpcOpts = {
    db: {}
  }
  
  beforeAll(
    async () => {
      const clientOpts = getClientOpts()
      ClientStore = createClient(clientOpts)

      startRpcServer(rpcOpts)

      const StoreFactory = (...args) => {
        return levelup(new ClientStore(...args))
      }

      const repo = new IPFSRepo('/tmp/ipfs-repo', {
        storageBackendOptions: {
          blocks: {
            db: StoreFactory,
          },
        }
      })

      const cachePath = './orbitdb/cache'

      const orbitDbStorage = OrbitDbStorageAdapter(
        (...args) => new ClientStore(...args),
        {}
      )
      const cacheStorage = await orbitDbStorage.createStore(cachePath)
      const cache = new OrbitDbCache(cacheStorage)

      const keystorePath = './orbitdb/keystore'
      const odbStorage = await OrbitDbStorageAdapter((...args) => new ClientStore(...args), {})
      const keyStorage = await odbStorage.createStore(keystorePath)
      const keystore = new OdbKeystore(keyStorage)
      
      
      ipfs = await IPFS.create({ repo })
      orbitdb = await OrbitDB.createInstance(ipfs, { cache, storage: odbStorage, keystore })
    }
  )

  afterAll(
    async () => {
      Object.keys(rpcOpts.db).forEach(
        (k) => delete rpcOpts.db[k]
      )
      
      await ipfs.stop()
    }
  )

  describe("ClientStore against object store through ipfs", () => {
    it('it caches file blocks on add', async () => {
      let db = await orbitdb.log('news')
      await db.add('hello')
      console.log({
        rpcOpts,
      })
    })
  })
})
