
products = [
  { name: "Laptop", quantity: 10 },
  { name: "Mouse", quantity: 25 },
  { name: "Keyboard", quantity: 15 }
]
let Sales =
[
 { name: "Laptop", sold: 5 },
  { name: "Mouse", sold: 25 },
{ name: "Keyboard", sold: 10 }
]
;

function updateInverntorty(products,Sales){
    products.forEach(product => {
        let sale = Sales.find(s=>s.name === product.name)
        if(sale){
            product.quantity -= sale.sold;
            if(product.quantity <=0){
                product.quantity  = 0;
                product.status = "Out of Stock"
            }
        }
    });
    return products
}
updateInverntorty(products,Sales)
console.log("Update Products")
console.log(products)
//Expected Output:

//[
 // { name: "Laptop", quantity: 5 },
  //{ name: "Mouse", quantity: 0, status: "Out of Stock" },
  //{ name: "Keyboard", quantity: 5 }
//]
