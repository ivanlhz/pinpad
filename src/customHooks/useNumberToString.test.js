import { renderHook, act } from '@testing-library/react-hooks';
import { useNumberToString } from './useNumberToString';

test('exposes the number and pressHandler function', () => {
  const { result } = renderHook(useNumberToString);
  expect(result.current.stringNumber).toBe('');
  act(() => result.current.pressHandler(1));
  expect(result.current.stringNumber).toBe('1');
  act(() => result.current.pressHandler(1));
  act(() => result.current.pressHandler(1));
  act(() => result.current.pressHandler(2));
  expect(result.current.stringNumber).toBe('1112');
  act(() => result.current.pressHandler(3));
  expect(result.current.stringNumber).toBe('3');
});

test('the number should transform into the string', () => {
  const { result } = renderHook(() => useNumberToString('1', 2));
  expect(result.current.stringNumber).toBe('1');
  act(() => result.current.pressHandler(2));
  expect(result.current.stringNumber).toBe('12')
  act(() => result.current.pressHandler(1));
  act(() => result.current.pressHandler(1));
  expect(result.current.stringNumber).toBe('11')
  act(() => result.current.pressHandler(2));
  expect(result.current.stringNumber).toBe('2')
});

