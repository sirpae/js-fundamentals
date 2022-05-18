// do not modify this code
const basket = {
  items: [
    {
      name: 'Apple',
      quantity: 10,
      price: 1
    },
    {
      name: 'Lemon',
      quantity: 2,
      price: 0.5
    }
  ],
  voucherCodes: [
    'AA-AA-A',
    'BB-BB-B'
  ]
}

// TODO: write code in this section to pass the tests. You will need to add new code
// as well as modify some of the existing code

// Set this variable to the length of the baskets voucher codes array
const numberOfVoucherCodes = basket.voucherCodes.length

// Set this variable to the first element in of the baskets voucher codes array
const firstVoucherCode = basket.voucherCodes[0]

//price of apples = 2 
basket.items[0].price = 2 

//4 oranges priced at 0.75 should be added to the end of the items list
const orangesItem = {
  name: 'Oranges',
  price: 0.75,
  quantity: 4
}
basket.items.push(orangesItem)



// Do not edit this exported object
module.exports = {
  basket: basket,
  numberOfVoucherCodes: numberOfVoucherCodes,
  firstVoucherCode: firstVoucherCode
}