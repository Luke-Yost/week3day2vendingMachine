

export class VendItem{
  constructor(image, name, price){
    this.image = image,
    this.name = name ,
    this.price = price 
  }

  get Template(){
    return `
    <div class="col-md-3">
    <div class="card" style="width: 18rem;">
      <img src="${this.image}" class="card-img-top" alt="${this.name}">
      <div class="card-body">
        <h4 class="card-title">${this.name}</h4>
        <h4 class="card-title">Moniez Needed: ${this.price}</h4>
        <button onclick="purchase(${this.price})" class="btn-success">Purchase</button>
      </div>
    </div>
  </div>
    `
  }


}