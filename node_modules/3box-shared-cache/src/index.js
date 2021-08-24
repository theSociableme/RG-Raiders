import {
  createOrbitStorageProxy,
  createIpfsStorageProxy,
  cacheSupported
} from './client.js'
const HIDE_IFRAME_STYLE = 'position: fixed; width:0; height:0; border:0; border:none !important'
const CACHE_IFRAME_URL = 'https://cache.3box.io'
/**
 *  IframeCache provides an interface for loading an iframe cache and for returning
 *  configured storage interfaces for ipfs and orbitdb. All data is shared over
 *  and rpc layer through postmessage, this acts like an rpc client.
 */
class IframeCache {
  /**
    *  Creates IframeCache. Create and loads iframe. Should be instantiated
    *  on page load.
    *
    * @param     {String}    iframeUrl   iframe url, defaults to cache.3box.io cache service
    */
  constructor (iframeUrl) {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      throw new Error('Shared iframe cache not supported in this enviroment')
    }

    this.iframe = document.createElement('iframe')
    this.iframe.src = iframeUrl || CACHE_IFRAME_URL
    this.iframe.style = HIDE_IFRAME_STYLE
    this.iframe.frameBorder = 0

    this.iframeLoadedPromise = new Promise((resolve, reject) => {
      this.iframe.onload = () => { resolve() }
    })

    document.body.appendChild(this.iframe)
  }

  getOrbitStorageProxyFactory () {
    // const postMessage = this.iframe.contentWindow.postMessage.bind(this.iframe.contentWindow)
    return (path) => createOrbitStorageProxy(path, { postMessage: this.postMessage })
  }

  getIpfsStorageProxy () {
    return createIpfsStorageProxy({
      postMessage: (data, origin) => this.postMessage(data, '*')
    })
  }

  async connect () {
    await this.iframeLoadedPromise
    this.postMessage = this.iframe.contentWindow.postMessage.bind(this.iframe.contentWindow)
    return cacheSupported({ postMessage: this.postMessage })
  }
}

export { IframeCache }
