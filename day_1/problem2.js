const products = [
    { id: 1, name: "Laptop", price: 1000, quantity: 5, supplierId: 101 },
    { id: 2, name: "Phone", price: 500, quantity: 0, supplierId: 102 },
    { id: 3, name: "Tablet", price: 300, quantity: 10, supplierId: 101 },
    { id: 4, name: "Monitor", price: 200, quantity: 8, supplierId: 103 }
  ];
  
  const suppliers = {
    101: { name: "Tech Corp", contact: "tech@example.com" },
    102: { name: "Gadget World", contact: "gadget@example.com" },
    103: { name: "Display Solutions", contact: "display@example.com" }
  };
  

const productQuantity = products.filter((ele)=>{
  if(ele.quantity > 0){
    return ele;
  }
})

const sortbyPrice=productQuantity.sort((a,b)=>{
  return a.price-b.price;
})

