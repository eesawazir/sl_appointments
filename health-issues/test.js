idList = {};

rngMaxRange = 100000;

idNum = RNG(rngMaxRange);
idList.idNum = 1;
console.log(idList.idNum + 1);
while (idList.idNum) {
  idNum = RNG(rngMaxRange);
}

function RNG(rngMaxRange) {
  return Math.floor(Math.random() * rngMaxRange) + 1;
}
