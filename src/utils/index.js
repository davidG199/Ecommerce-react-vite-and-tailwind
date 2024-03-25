
/* 
* This function calculates the total price of a new order
* @param {array} products cartProduct: array of objets
* @return {number} total price 
*/
export const totalPrice = (products) =>{

    let sum = 0
    products.forEach(product => sum += product.price)

    return sum

}