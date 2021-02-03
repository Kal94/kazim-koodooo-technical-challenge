const accountBalanceHistoryA = [
    {
      monthNumber: 0, // current month
      account: {
        balance: { amount: 300 },
      },
    },
    {
      monthNumber: 1, // last month
      account: {
        balance: { amount: 250 },
      },
    },
    {
      monthNumber: 2, // two months ago
      account: {
        balance: { amount: 200 },
      },
    },
    {
      monthNumber: 3, // three months ago
      account: {
        balance: { amount: 150 },
      },
    }
  ]

  const accountBalanceHistoryB = [
    {
      monthNumber: 0, // current month
      account: {
        balance: { amount: 200 },
      },
    }
  ]

  const accountBalanceHistoryC = [
    {
      monthNumber: 0, // current month
      account: {
        balance: { amount: 46 },
      },
    },
    {
      monthNumber: 1, // last month
      account: {
        balance: { amount: 75 },
      },
    },
    {
      monthNumber: 2, // two months ago
      account: {
        balance: { amount: 90 },
      },
    },
    {
      monthNumber: 3, // three months ago
      account: {
        balance: { amount: 150 },
      },
    }
  ]

const accountTypeChecker = (accountBalanceHistory) => {

    const differenceBetween = [];
    for (let i = 1; i < accountBalanceHistory.length; i++){
        differenceBetween.push(accountBalanceHistory[i].account.balance.amount - accountBalanceHistory[i -1].account.balance.amount)
    }

    if(differenceBetween.length === 0){
        return "There is not enough data."
    } else {
        let result = differenceBetween.every( (val, i, arr) => val === arr[0] )
        return result ? "B" : "A";
    }

};

console.log(accountTypeChecker(accountBalanceHistoryA)); //returns B
console.log(accountTypeChecker(accountBalanceHistoryB)); // returns There is not enough data
console.log(accountTypeChecker(accountBalanceHistoryC)); // returns A