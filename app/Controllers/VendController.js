import { ProxyState } from "../AppState.js";



function _drawCandies() {
    let candies = ProxyState.Candies
    let template = ''
    candies.forEach(candy => template += candy.Template)
    document.getElementById('candies').innerHTML = template
}








export class VendController {
    constructor() {


        _drawCandies()
    }





    buy(name) {
        vendService.buy(name)
        _drawCandies()
    }


}
