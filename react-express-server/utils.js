/* eslint-disable semi */
const { floor, random } = Math;

function rando(n) {
  const roundedInt = floor((random() * (n - 1)));
  return roundedInt;
}

function randomD(n) {

  const randomInt = floor(random() * n) + 1;
  return randomInt;
}

function randomRolls(n, s) {
  const rolls = [];
  for (let i = 0; i < n; i += 1) {
    rolls.push(randomD(s));
  }

  return rolls;
}

module.exports.rando = rando
module.exports.randomD = randomD
module.exports.randomRolls = randomRolls
