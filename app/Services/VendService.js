import { ProxyState } from "../AppState.js";


class VendService {
    buy(name) {
        let candy = ProxyState.Candies.find(c => c.name == name)
        console.log(candy);
    }
}







export const vendService = new VendService()