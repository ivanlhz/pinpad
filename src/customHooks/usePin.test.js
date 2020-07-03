import {renderHook} from '@testing-library/react-hooks'
import { usePin } from './usePin'

describe('usePin', () => {
  test('Should generate a string pin with 4 digits', async() => {
    const {result, waitForNextUpdate} = renderHook(usePin)
    await waitForNextUpdate();
    expect(result.current.pin.length).toBe(4);
  })
  test('Should generate a string pin with 8 digits', async() => {
    const {result, waitForNextUpdate} = renderHook(() => usePin(8))
    await waitForNextUpdate();
    expect(result.current.pin.length).toBe(8);
  })
})