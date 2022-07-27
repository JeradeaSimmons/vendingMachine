export class Candy {
  constructor(name, image, price) {
    this.name = name,
      this.image = image,
      this.price = price
  }


  get Template() {
    return `
    <section class"row">
    <h3>${this.name}</h3>
    <img onclick="app.VendController.buy('${this.name}')" src="${this.image}" alt="">
    <h4>$${this.price}</h4>
  </section>


    
    `
  }
}


