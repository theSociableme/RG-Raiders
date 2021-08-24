const levelup = require('levelup')

const { createClient } = require('../src')
const { startRpcServer, getClientOpts } = require('./testUtils')

describe("Shared cache module", () => {  
  let ClientStore, db, rpcOpts = {
    db: {},
  }

  beforeAll(
    () => {
      const clientOpts = getClientOpts()      

      startRpcServer(rpcOpts)

      ClientStore = createClient(clientOpts)
      db = levelup(new ClientStore('./mydb'))
    }
  )

  afterAll(
    () => {
      Object.keys(rpcOpts.db).forEach(
        (k) => delete rpcOpts.db[k]
      )
    }
  )

  describe("ClientStore against object store through levelup", () => {

    it('open', (done) => {
      db.open({}, (err) => {
        expect(err).toBe(null)
        done()
      })
    })
 
    it("put", (done) => {
      db.put('key', 123, (err, value) => {
        expect(rpcOpts.db.key).toEqual(123)
        done()
      })
    })

    it("get", (done) => {
      db.get('key', {}, (err, value) => {
        expect(rpcOpts.db.key).toEqual(value)
        done()
      })
    })

    it("del", (done) => {
      db.del('key', (err) => {
        expect(rpcOpts.db.key).toEqual(undefined)
        done()
      })
    })
  })
})
