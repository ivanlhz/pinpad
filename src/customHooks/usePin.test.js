import {renderHook} from '@testing-library/react-hooks'
import { usePin } from './usePin'

describe('usePin', () => {
  test('Should generate a string pin with 4 digits', () => {
    const {result} = renderHook(usePin)
    expect(result.current.length).toBe(4);
  })
  test('Should generate a string pin with 8 digits', () => {
    const {result} = renderHook(() => usePin(8))
    expect(result.current.length).toBe(8);
  })
})