const readline = require("readline");
const mainJob = require("./problem");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Please enter the amount: ", function (amount) {
  rl.question("Please enter split type, it should be one of these options(more-add, equal): ", function (splitOption) {
    //call main fun here
    mainJob(splitOption, amount);
    rl.close();
  });
});
rl.on("close", function () {
  console.log("\nProcess has closed!!!");
  process.exit(0);
});
