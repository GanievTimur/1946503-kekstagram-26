const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) =>
  elements[getRandomPositiveInteger(0, elements.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';

const isArrayUnique = (elements) => {
  const result = [];
  elements.forEach((element) => {
    if (!result.includes(element)) {
      result.push(element);
    }
  });
  return result.length === elements.length;
};

export { getRandomArrayElement, getRandomPositiveInteger, isEscapeKey, isArrayUnique };
