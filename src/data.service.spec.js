import getData from './data.service';

test('can create array', () => {
    let arrayLength;
    let arrayRange;
    let arr;
    arrayLength = 1;
    arrayRange = 10
    arr = getData(arrayLength, arrayRange);
    expect(arr.length).toBe(arrayLength)
    arrayLength = 1000000;
    arrayRange = 10
    arr = getData(arrayLength, arrayRange);
    expect(arr.length).toBe(arrayLength)
});