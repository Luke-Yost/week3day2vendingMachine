import { ProxyState } from "../AppState.js";
import {vendItemsService} from "../Services/vendItemsService.js";

function _drawVendItems(){
  let vendItems = ProxyState.vendItems
  let template = 
}


export class VendItemsController {
  constructor(){
    console.log('vendItems loaded', ProxyState.vendItems);
  }
}