function isValidLoan(daysLate) {
  return daysLate >= 0;
}

function calculateLateFee(daysLate, ratePerDay) {
  if (daysLate <= 1) {
    return 0;
  }
  const fee = Math.round(daysLate * ratePerDay);
  const capped = Math.min(fee, 20);
  return Math.max(capped, 1);
}

module.exports = { isValidLoan, calculateLateFee };