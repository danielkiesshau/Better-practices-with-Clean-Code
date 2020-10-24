const loans = [
  {
    interestRate: 0.8,
    totalAmount: 1500,
    isSpecial: false
  },
  {
    interestRate: 0.6,
    totalAmount: 10000,
    isSpecial: true
  }
];


function calculateTotalLoans(loans) {
  let totalLoans = loans.reduce(calculateIndividualLoan, 0)  
  return totalLoans.toFixed(2)
}

const calculateIndividualLoan = (total, loan) => {
  const individualLoan = calculateInterestAmount(
    loan.interestRate,
    loan.totalAmount,
    loan.isSpecial
  ) + loan.totalAmount
  
  return total + individualLoan
}

function calculateInterestAmount(interestRate, totalAmount, isSpecial) {
  const SPECIAL_INTEREST_RATE_DISCOUNT = 0.5;
  let appliedInterest =  isSpecial ? (interestRate - SPECIAL_INTEREST_RATE_DISCOUNT) : interestRate;
  return (appliedInterest * totalAmount)
}

calculateTotalLoans(loans);