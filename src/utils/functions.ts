export const NotAreEmpty = (pin: string, stringNumber: string): boolean => {
  return pin.length > 0 && stringNumber.length > 0
}

export const hasEqualLength = (pin: string, stringNumber: string) : boolean => {
  return pin.length === stringNumber.length
}

export const isValid = (pin: string, stringNumber: string): boolean => {
  return NotAreEmpty(pin, stringNumber) && hasEqualLength(pin, stringNumber) && pin === stringNumber;
}