let object1 = {
  x: 1,
};

let object2 = {
  x: 2,
  y: 2,
};

const sumValueByKey = (...rest) =>
  rest.reduce((result, current) => {
    for (let key in current) {
      result[key] = result[key] ? result[key] + current[key] : current[key];
    }
    return result;
  }, {});

console.log(sumValueByKey(object1, object2, object1));
