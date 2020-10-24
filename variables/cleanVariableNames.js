const interestRate = 0.8
const totalAmount = 1500
const isSpecial = false

const interestAmount = calculateInterestAmount(interestRate, totalAmount, isSpecial);

function calculateInterestAmount(interestRate, totalAmount, isSpecial) {
  const SPECIAL_INTEREST_RATE_DISCOUNT = 0.5;
  let appliedInterest =  isSpecial ? 
    (interestRate - SPECIAL_INTEREST_RATE_DISCOUNT) : interestRate;
  return (appliedInterest * totalAmount).toFixed(2)
}

const pets = ["Dog", "Cat", "Bird"]

const catFound = pets.find(pet => pet === "Cat")