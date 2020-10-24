const x = 0.8
const y = 1500
const special = false

const r = calculateInterestAmount(x, y, special);

function calculateInterestAmount(x, y, special) {
  return (special ? (x - 0.5) * y :  x * y).toFixed(2)
}

const anmls = ["Dog", "Cat", "Bird"]

const f = anmls.find(a => a === "Cat")