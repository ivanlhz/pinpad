import {renderHook} from '@testing-library/react-hooks'
import { render } from '@testing-library/react'
import {useDisplayResults} from './useDisplayResults'

describe('useDisplayResults', () => {
  test('should display Ok if the the pinCode is right', () => {
    const {result} = renderHook(() => useDisplayResults('112','1111'));
    const {getByText} = render (result.current)

    expect(getByText('**')).toBeInTheDocument()
    expect(getByText('2')).toBeInTheDocument()

  })

  test('should display Ok if the the pinCode is right', () => {
    const {result} = renderHook(() => useDisplayResults('1111','1111'));
    const {getByText} = render (result.current)

    expect(getByText('OK')).toBeInTheDocument()
  })

  test('should display ERROR if the the pinCode is wrong', () => {
    const {result} = renderHook(() => useDisplayResults('1112','1111'));
    const { getByText} = render (result.current)

    expect(getByText('ERROR')).toBeInTheDocument()
  })
})
