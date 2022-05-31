import { ValuesController } from "./Controllers/ValuesController.js";
import { VendItemsController} from "./Controllers/vendItemsController.js"
import {ProxyState} from "./AppState"

class App {
  // valuesController = new ValuesController();
  vendItemsController = new VendItemsController()
}

window["app"] = new App();
