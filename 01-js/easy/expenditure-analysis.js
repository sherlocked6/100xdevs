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
  ans = {};
  transactions.forEach(element => {
    if(ans[element['category']]){
      ans[element['category']] = ans[element['category']] + element['price'];
    }
    else{
      ans[element['category']] = element['price'];
    }
  });

  temp = []

  Object.keys(ans).forEach(key => {
    temp.push({category: key, totalSpent: ans[key]});
  })

  return temp;
}

module.exports = calculateTotalSpentByCategory;
