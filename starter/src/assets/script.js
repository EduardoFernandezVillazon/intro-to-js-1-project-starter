
class Product{
constructor(name, price, quantity, productId, image){
    this.name=name;
    this.price=price;
    this.quantity=quantity;
    this.productId=productId;
    this.image=image;
}
}
const products = [
  new Product("cherry", 3.5, 0, 0, "images/cherry.jpg"),
  new Product("orange", 5, 0, 1, "images/orange.jpg"),
  new Product("strawberry", 2, 0, 2, "images/strawberry.jpg")
];

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
let cart= [];
/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
addProductToCart = function (addProductId){
  const findProduct = (element) => element.productId==addProductId;
  productIndex = products.findIndex(findProduct);
  products[productIndex].quantity++;
  if (!cart.includes(products[productIndex])){cart.push(products[productIndex])};
  }
/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
increaseQuantity = function (increaseProductId){
  const findProduct = (element) => element.productId==increaseProductId;
  productIndex = products.findIndex(findProduct);
  products[productIndex].quantity++;
  }
/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
decreaseQuantity = function (decreaseProductId){
  const findProduct = (element) => element.productId==decreaseProductId;
  productIndex = products.findIndex(findProduct);
  products[productIndex].quantity--;
  const isCartProduct = (element) => element == products[productIndex];
  if (products[productIndex].quantity==0){cart.splice(cart.findIndex(isCartProduct))};
  }
/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
removeProductFromCart = function (removeProductId){

  const findProduct = (element) => element.productId==removeProductId;
  productIndex = products.findIndex(findProduct);
  products[productIndex].quantity=0;
  const isCartProduct = (element) => element == products[productIndex];
  cart.splice(cart.findIndex(isCartProduct),1);
  }
/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
cartTotal = function (){
  let total=0;
  const addToTotal = (element) => total+=element.quantity*element.price;
  products.forEach(addToTotal);
  return total;
}
/* Create a function called emptyCart that empties the products from the cart */
emptyCart = function (){
  cart.splice(0,cart.length);
  const setToZero = (element) => element.quantity=0;
  products.forEach(setToZero);
}
/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
pay = function (amountPaid){
  return amountPaid - cartTotal();
}
/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
