const DAYS_NUMBER = 10;

/**
 * Enum for tri-state values.
 * @readonly
 * @enum {string}
 */
const SPLIT_OPTIONS_ENUM = {
  EQUAL: "equal",
  MOREADD: "more-add",
};

/**
 * returns amount for every day based on split option.
 * @param {SPLIT_OPTIONS_ENUM} splitOption - The first is split option.
 * @param {number} amount - The second number, in number format.
 * @return {number} return `amount` per day.
 */
function getAmountPerDayBasedOnSplitType(splitOption, amount) {
  const daysDivisionNo = 2;
  const numberOfOddDays = DAYS_NUMBER / daysDivisionNo; //get number of odd days during ten days
  if (splitOption === SPLIT_OPTIONS_ENUM.EQUAL) {
    return amount / DAYS_NUMBER; //get amount to each day
  } else {
    return amount / (DAYS_NUMBER + numberOfOddDays);
  }
}

/**
 * checks if number odd or not.
 * @param {number} number - The first number, in number format.
 * @return {boolean} `true` if number is odd.
 */
function isOddNumber(number) {
  return number % 2;
}

/**
 * prints amount for ten days and print them
 * @param {number} amountPerDay - The first number, in number format.
 * @param {SPLIT_OPTIONS_ENUM} splitOption - The first is split option.
 */
function printEqualResultDaysBasedOnSplit(amountPerDay, splitOption) {
  for (let day = 1; day <= DAYS_NUMBER; day++) {
    if (splitOption === SPLIT_OPTIONS_ENUM.MOREADD && isOddNumber(day)) {
      const oddDayAmount = amountPerDay * 2; //double amount coz its an odd number
      console.log(`Day ${day} : ` + oddDayAmount + `$`);
    } else {
      console.log(`Day ${day} : ` + amountPerDay + `$`);
    }
  }
}

/**
 * runs main job
 * @param {SPLIT_OPTIONS_ENUM} splitType - The first is split option.
 * @param {number} amount - The second number, in number format.
 */
function mainJob(splitType, amount) {
  const amountPerDay = getAmountPerDayBasedOnSplitType(splitType, Number(amount));
  printEqualResultDaysBasedOnSplit(amountPerDay, splitType);
}

/**
 * mainJob.
 * @module mainJob
 */
module.exports = mainJob;
