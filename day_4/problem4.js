Input:
cart = [
  { "price": 10, "quantity": 2 },
  { "price": 5, "quantity": 4 },
  { "price": 20, "quantity": 1 }
]
discount = 10 
minPriceThreshold = 3

// Output:
// Total = 54

let total=0
for(let {price,quantity} of cart){
    let final=0
    if(price > minPriceThreshold){
        let Discount=price-(price*discount/100)
        if(Discount > minPriceThreshold){
            final=Discount*quantity
        }else{
            final=3*quantity
        }
    }
    else{
        final=price*quantity
    }
    total+=final
}
console.log(total)