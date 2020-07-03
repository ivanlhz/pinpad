import { renderHook, act } from '@testing-library/react-hooks'
import { useCheckErrors } from './useCheckErrors'

describe('useCheckErrors', () => {
  test('should has 0 errors', () => {
    const {result} = renderHook(() => useCheckErrors('1', '1234'))
    expect(result.current.errorCount).toBe(0)
  })

  test('should has a error if the userInputCode has the same length than the pin and the pin code is different than the userInputCode', () => {
      const {result} = renderHook(() => useCheckErrors('1111', '1234'))
      expect(result.current.errorCount).toBe(1)
  })

  test('should increment errorCount', () => {
    const {result} = renderHook(() => useCheckErrors('1111', '1234'))
    expect(result.current.errorCount).toBe(1)
    act(() => result.current.setErrorCount(3))
    expect(result.current.errorCount).toBe(3)
  })
  test('should increment errorCount', () => {
    const {result} = renderHook(() => useCheckErrors('1111', '1111'))
    expect(result.current.hasNewError).toBe(false)
  })
})