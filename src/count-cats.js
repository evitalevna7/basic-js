module.exports = function countCats(arr) {
  let result = 0;
  arr.forEach(item => {
    item.forEach(element => {
      if (element === '^^') {
        result += 1;
      }
    });
  });
  return result;
};
