const { createClient } = require('../src')
const { getClientOpts, startRpcServer } = require('./testUtils')

const OrbitDbStorageAdapter = require('orbit-db-storage-adapter')
const OdbKeystore = require('orbit-db-keystore')
const OrbitDbCache = require('orbit-db-cache')
const OrbitDB = require('orbit-db')
const IPFS = require('ipfs')

describe("Shared cache module", () => {  
  let ipfs, orbitDb, ClientStore, db, rpcOpts = {
    db: {}
  }
  
  beforeAll(
    async () => {
      const clientOpts = getClientOpts()
      ClientStore = createClient(clientOpts)

      startRpcServer(rpcOpts)

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
      
      ipfs = await IPFS.create()

      orbitDb = await OrbitDB.createInstance(ipfs, { cache, keystore, storage: odbStorage })
      
      db = await orbitDb.log('news')
    }
  )

  afterAll(
    async () => {
      Object.keys(rpcOpts.db).forEach(
        (k) => delete rpcOpts.db[k]
      )
      
      await db.close()
      await orbitDb.disconnect()
      await ipfs.stop()
    }
  )

  describe("ClientStore against object store through orbit-db as cache", () => {
    it('updates cache with log heads on database add operation', async () => {
      const hash = await db.add('hello')
      expect(
        JSON.parse(
          rpcOpts.db[`${db.id}/_localHeads`]
        )[0].payload.value
      )
        .toEqual('hello')
      })
  })
})
