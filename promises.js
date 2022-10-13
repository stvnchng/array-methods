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

const mockReturnValue = (obj) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(obj);
    }, Math.random() * 3500);
  });
};

const mock1 = mockReturnValue({ value: [1, 2, 3] });
const mock2 = mockReturnValue({ value: [4, 5, 6] });
const mock3 = mockReturnValue({ value: [7, 8, 9] });

const promises = [mock1, mock2, mock3];

promiseAll(promises).then((data) => console.log(data));
