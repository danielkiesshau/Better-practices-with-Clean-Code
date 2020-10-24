
const firstLoan = {
  interestRate: 0.8,
  totalAmount: 1500,
  isSpecial: false
};

const secondLoan = {
  interestRate: 0.6,
  totalAmount: 10000,
  isSpecial: true
};

calculateTotalLoans(firstLoan, secondLoan);

function calculateTotalLoans(firstLoan, secondLoan) {
  let totalLoans = 0
  const SPECIAL_INTEREST_RATE_DISCOUNT = 0.5
  
  let firstAppliedInterest =  firstLoan.isSpecial ?
    (firstLoan.interestRate - SPECIAL_INTEREST_RATE_DISCOUNT) : firstLoan.interestRate
  const firstInterestAmount = (firstAppliedInterest * firstLoan.interestRate)
  totalLoans += firstInterestAmount + firstLoan.totalAmount



  let secondAppliedInterest =  secondLoan.isSpecial ?
    (secondLoan.interestRate - SPECIAL_INTEREST_RATE_DISCOUNT) : secondLoan.interestRate
  const secondInterestAmount = (secondAppliedInterest * secondLoan.interestRate)
  totalLoans += secondInterestAmount + secondLoan.totalAmount
  

  return totalLoans.toFixed(2)
}