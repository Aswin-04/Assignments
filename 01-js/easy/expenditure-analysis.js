/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let categories = []
  transactions.forEach((transaction) => {
    if(categories.includes(transaction.category)) return
    categories.push(transaction.category)
  })

  let result = []
  
  categories.forEach((category) => {

    let obj = {}
    obj.category = category
    obj.totalSpent = 0

    transactions.forEach((transaction) => {
      if(transaction.category ==  category) {
        obj.totalSpent+=transaction.price
      }
    })
    result.push(obj)
  })
  
  return result;
}

module.exports = calculateTotalSpentByCategory;
