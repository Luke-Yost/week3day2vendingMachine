import { ProxyState } from "../AppState.js";



class vendItemsService{
  function addMoniez(num){
    let moniez = ProxyState.moniez
    moniez += num
    ProxyState.moniez = moniez
    }

    function purchase(cost){
      let moniez = ProxyState.moniez
      let price = ProxyState.vendItems.find(item =>item.price == cost)
      if(moniez >= price){
        
      }
    }
}

export const vendItemsService = new VendItemsService()