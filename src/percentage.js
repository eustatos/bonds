/**
 *
 * @param {String[]} arr массив из строковых представлений рациональных чисел
 * @returns {String[]} solutiton массив из строковых представлений процентов от
 * общей суммы
 */
function percentage(arr) {
  const temp = [];
  const summ = arr.reduce((acc, item) => {
    const num = Number.parseFloat(item);
    temp.push(num);
    return acc + num;
  }, 0);
  const solution = temp.map((item) => {
    return ((item / summ) * 100).toFixed(3).toString();
  });
  return solution;
}

export default percentage;
