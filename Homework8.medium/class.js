class shopingCart{
    constructor() {
        this.items = [];
        this.totalPrice = 0
        
    }


    additem(product, price) {
        this.items.push(product)
        this.totalPrice = this.totalPrice + price;
         
    }
    removeItem(product, price) {
        const indexOfItemToBeRemoved = this.items.findIndex(item => item === product); // to get the index of the item that needs to be removed
        this.items.splice(indexOfItemToBeRemoved, 1); // to remove the item
        this.totalPrice = this.totalPrice - price;}


      // this.items.shift(product)
     // this.totalPrice = this.totalPrice - price;}

    

     total(){
        console.log(shoppingCart.totalPrice, shoppingCart.items.length)
     }
           } 

const cart = new shopingCart();
cart.additem("steak", 100);
cart.additem("beer", 50);
cart.additem("wine",120);
console.log(cart.items,cart.totalPrice);
cart.removeItem("wine", 120);
console.log(cart.items,cart.totalPrice);
console.log(cart.totalPrice,cart.items.length);

const lidlcart = new shopingCart();
lidlcart.additem("bread", 40);
lidlcart.additem("cheese",38);
lidlcart.additem("ice-cream", 26);
console.log(lidlcart.items,lidlcart.totalPrice);
lidlcart.removeItem("cheese", 38);
console.log(lidlcart.items, lidlcart.totalPrice);
console.log(lidlcart.totalPrice,lidlcart.items.length);


const metrocart = new shopingCart();
metrocart.additem("fish", 48);
metrocart.additem("chips", 25);
metrocart.additem("toys", 400);
metrocart.additem("shrimp", 90);
console.log(metrocart.items, metrocart.totalPrice);
metrocart.removeItem("chips" ,25);
metrocart.removeItem("fish", 48);
console.log(metrocart.items, metrocart.totalPrice);
console.log(metrocart.totalPrice,metrocart.items.length);






