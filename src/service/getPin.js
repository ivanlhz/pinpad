export const getPin = (length = 4) => {
  return new Promise( (resolve) => {
    setTimeout(() => {
      const newPin = Math.floor(Math.random() * Math.pow(10, length) + 1).toString();
      if (newPin.length === length) {
        resolve(newPin);
      } else {
        resolve(newPin.padStart(length, '0'));
      }
    },200)
  })
} 