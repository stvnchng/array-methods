async function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let numResolved = 0;

    promises.forEach((promise, index) => {
      promise
        .then((result) => {
          results[index] = result;
          numResolved += 1;
          if (numResolved === promises.length) {
            resolve(results);
          }
        })
        .catch((err) => reject(err));
    });
  });
}

function promiseAllRecursive(promises) {
  if (promises.length === 0) {
    return Promise.resolve([]);
  }
  const [first, ...remaining] = promises;
  return first.then((result) => {
    return promiseAllRecursive(remaining).then((remainingResults) => {
      return [result, ...remainingResults];
    });
  });
}

const reduce = (items, callback, initVal) => {
  items.forEach((item) => (initVal = callback(initVal, item)));
  return initVal;
};

function promiseAllReducer(promises) {
  return reduce(
    promises,
    (acc, value) => {
      return Promise.resolve(acc).then((results) => {
        return Promise.resolve(value).then((result) => {
          return [...results, result];
        });
      });
    },
    []
  );
}

const mockReturnValue = (obj) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(obj);
    }, Math.random() * 3500);
  });
};

const mock1 = mockReturnValue({ value: [1, 2, 3] });
const mock2 = mockReturnValue({ value: [4, 5, 6] });
const mock3 = mockReturnValue({ value: [7, 8] });

const promises = [mock1, mock2, mock3];

const getResults = async () => {
  const results = await promiseAll(promises);
  console.log(results);
};

getResults();
