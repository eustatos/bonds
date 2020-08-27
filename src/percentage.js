/**
 * 
 * @param {String[]} arr массив из строковых представлений рациональных чисел
 * @returns {String[]} solutiton массив из строковых представлений процентов от 
 * общей суммы
 */
function percentage(arr) {
  const summ = arr.reduce((acc, item) => {
    return acc + Number.parseFloat(item);
  }, 0);
  const solution = arr.map((item) => {
    return ((Number.parseFloat(item) / summ) * 100).toFixed(3).toString();
  });
  return solution;
}

export default percentage;
