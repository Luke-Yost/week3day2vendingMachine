import { ProxyState } from "../AppState.js";
import {vendItemsService} from "../Services/vendItemsService.js";




export class VendItemsController {
  constructor(){
    console.log('vendItems loaded', ProxyState.vendItems);
  }
}