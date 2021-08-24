const { caller } = require('postmsg-rpc')
const { AbstractLevelDOWN } = require('abstract-leveldown')
const { serialize, deserialize } = require('./utils')

class Store extends AbstractLevelDOWN {
  constructor (location, options, ...args) {
    super(location, options, ...args)
    this.location = location
    this.opts = Object.assign({}, options)
    delete options.postMessage

    caller('create', this.opts)(this.location, options, ...args)
  }

  _serializeKey (key) {
    return serialize(key)
  }

  _serializeValue (value) {
    return serialize(value)
  }

  _deserialize (v) {
    return deserialize(v)
  }

  async _open (options, callback) {
    const open = caller('open', this.opts)

    try {
      await open(this.location, options)
    } catch (error) {
      callback(error)
    }

    callback()
  }

  async _close (callback) {
    const close = caller('close', this.opts)

    try {
      await close(this.location)
    } catch (error) {
      callback(error)
    }

    callback()
  }

  async _get (key, options, callback) {
    const get = caller('get', this.opts)

    let response
    try {
      response = await get(this.location, key, options)
    } catch (error) {
      error.notFound = true
      return callback(error)
    }

    callback(null, this._deserialize(response))
  }

  async _put (key, value, options, callback) {
    const put = caller('put', this.opts)

    let response
    try {
      response = await put(this.location, key, value, options)
    } catch (error) {
      callback(error)
    }

    callback(null, response)
  }

  async _del (key, options, callback) {
    const del = caller('del', this.opts)

    let response
    try {
      response = await del(this.location, key, options)
    } catch (error) {
      callback(error)
    }

    callback(null, response)
  }

  async _batch (arr, options, callback) {
    const batch = caller('batch', this.opts)

    let response
    try {
      response = await batch(this.location, arr, options)
    } catch (error) {
      callback(error)
    }

    callback(null, response)
  }
}

export {
  Store
}
