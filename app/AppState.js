import { Candy } from "./Models/Candies.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []


  Candies = [
    new Candy('Butterfinger', "assets/img/butterfinger.jpg", 1),
    new Candy('Snickers', "assets/img/snickers.png", 1),
    new Candy('Babe Ruth', "assets/img/baberuth.jpg", 1),
    new Candy('Reeses', "assets/img/reeses.jpg", 1)

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
