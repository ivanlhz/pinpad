import {NotAreEmpty, hasEqualLength, isValid} from './functions'

describe('functions', () => {
  test('Should NotAreEmpty', () => {
    expect(NotAreEmpty('123', '456')).toBeTruthy()
    expect(NotAreEmpty('', '')).toBeFalsy()
  })
  test('Should hasEqualLength', () => {
    expect(hasEqualLength('123', '456')).toBeTruthy()
    expect(hasEqualLength('1', '123')).toBeFalsy()
  })
  test('Should be valid', () => {
    expect(isValid('1234', '1234')).toBeTruthy()
    expect(isValid('1234', '4567')).toBeFalsy()
  })
})