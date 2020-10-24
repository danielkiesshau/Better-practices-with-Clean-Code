const interestRate = 0.8
const totalAmount = 1500
const isSpecial = false

const interestAmount = calculateInterestAmount(interestRate, interestRate, isSpecial);

function calculateInterestAmount(interestRate, interestRate, isSpecial) {
  let appliedInterest =  isSpecial ? (interestRate - 0.5) : interestRate;
  return (appliedInterest * interestRate).toFixed(2)
}

const pets = ["Dog", "Cat", "Bird"]

const catFound = pets.find(pet => pet === "Cat")