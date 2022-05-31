import { VendItem } from "./Models/vendItem.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []

  moniez = 0

  vendItems = [
    new VendItem('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.tk_ZiLiOA97GHnTlds1n9wHaHa%26pid%3DApi&f=1','pringles', 4.50), 
    new VendItem('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.bf6PmtS_Ynzd84FX6TxgxwHaE0%26pid%3DApi&f=1','snickers', 2),
    new VendItem('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.veFiQ1L9zf_v3DevA6nsuwHaHa%26pid%3DApi&f=1','nutella jar', 6.25)
  ]

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
