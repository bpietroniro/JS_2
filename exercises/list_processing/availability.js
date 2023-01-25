function isItemAvailable(id, transactions) {
  const allTransactions = transactionsFor(id, transactions);
  const totalIn = allTransactions
    .filter(transaction => transaction.movement === 'in')
    .map(transaction => transaction.quantity)
    .reduce((sum, quantity) => sum + quantity, 0);
  const totalOut = allTransactions
    .filter(transaction => transaction.movement === 'out')
    .map(transaction => transaction.quantity)
    .reduce((sum, quantity) => sum + quantity, 0);

  const availability = totalIn - totalOut;
  return availability > 0;
}

function transactionsFor(id, transactions) {
  return transactions.filter(transactionObj => transactionObj.id === id);
}

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true
