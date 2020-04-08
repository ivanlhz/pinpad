import { renderHook, act } from '@testing-library/react-hooks';
import { useNumber } from './useNumber';

test('exposes the number and pressHandler function', () => {
  const { result } = renderHook(useNumber);
  expect(result.current.number).toBe('');
  act(() => result.current.pressHandler(1));
  expect(result.current.number).toBe('1');
  act(() => result.current.pressHandler(1));
  act(() => result.current.pressHandler(1));
  act(() => result.current.pressHandler(1));
  act(() => result.current.pressHandler(2));
  expect(result.current.number).toBe('2');
});
