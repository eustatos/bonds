function getData(length, range) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    const item = Math.round(Math.random() * range)
      .toFixed(1)
      .toString();
    arr.push(item);
  }
  return arr;
}

export default getData;
