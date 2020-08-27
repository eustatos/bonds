import percentage from './percentage';
import getData from './data.service';

test('calculate percentage [1, 1]', () => {
    const arr = [1, 1];
    const solution = percentage(arr);
    expect(solution[0]).toBe('50.000');
});
test('calculate percentage [1.5, 3, 6, 1.5]', () => {
    const arr = ['1.5', '3', '6', '1.5'];
    const solution = percentage(arr);
    expect(solution[0]).toBe('12.500');
});

test('calculate random array', () => {
    const arr = getData(5500000, 10);
    console.time('percentage execute');
    const solution = percentage(arr);
    console.timeEnd('percentage execute');
    expect(solution.length).toBe(5500000);
})