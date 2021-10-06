function random(limit) {
    const somewhereBetweenZeroAndOne = Math.random();
    const upperBound = (limit);
    const notAnIntegerYet = somewhereBetweenZeroAndOne * upperBound;
    const roundedDownForARandomInteger = Math.floor(notAnIntegerYet);

    return roundedDownForARandomInteger;
  }
  module.exports = random;