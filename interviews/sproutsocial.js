const listEqualityONRuntime = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  map1 = {};
  map2 = {};
  return;
};

const listEqualityO1Memory = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  arr1.sort();
  arr2.sort();
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};
