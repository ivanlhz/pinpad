import { act, renderHook } from '@testing-library/react-hooks';
import { useDisablePad } from './useDisablePad';

jest.useFakeTimers();

test('exposes disablePad and disablePadHandler function', () => {
  const { result } = renderHook(useDisablePad);
  expect(result.current.disabledPad).toBeFalsy();
  act(async () => await result.current.disablePadHandler());
  expect(result.current.disabledPad).toBeTruthy();
  act(() => jest.advanceTimersByTime(30001));
  expect(result.current.disabledPad).toBeFalsy();
});
