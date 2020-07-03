import {generateNumbers} from './generators'

describe('generateNumbers - tests', () => {
  test('Should generate a list of 10 objects with values from 0 to 9', () => {
    const numberList = generateNumbers();
    expect(numberList.length).toBe(10);
    for (let i = 0 ; i < 10; i ++) {
      expect(numberList[i].value).toBe(i);
    }
  })
  test('Should generate a list of 5 objects with values from 0 to 4', () => {
    const max = 5;
    const numberList = generateNumbers(max);
    expect(numberList.length).toBe(max);
    for (let i = 0 ; i < max; i ++) {
      expect(numberList[i].value).toBe(i);
    }
  })
})