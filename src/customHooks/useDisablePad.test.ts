import { act, renderHook } from '@testing-library/react-hooks';
import { useDisablePad } from './useDisablePad';

jest.useFakeTimers();

test('exposes disablePad and disablePadHandler function', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useDisablePad());
  expect(result.current.disabledPad).toBeFalsy();
  act(() => result.current.disablePadHandler());
  await waitForNextUpdate();
  expect(result.current.disabledPad).toBeTruthy();
});
