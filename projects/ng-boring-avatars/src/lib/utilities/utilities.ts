export const getNumber = (name: string) => {
  const charactersArray = Array.from(name)
  let charactersCodesSum = 0

  charactersArray.forEach((charactersArrayItem) => {
    return charactersCodesSum += charactersArrayItem.charCodeAt(0)
  })

  return charactersCodesSum;
}

export const getModulus = (num: number, max: number) => {
  return num % max;
}

export const getDigit = (number: number, ntn: number) => {
  return Math.floor(( number/ Math.pow(10, ntn)) % 10);
}

export const getBoolean = (number: number, ntn: number) => {
  return (!((getDigit(number, ntn)) % 2))
}

export const getAngle = (x: number, y: number) => {
  return Math.atan2(y, x) * 180 / Math.PI;
}

export const getUnit = (number: number, range: number, index: number | null) => {
  let value = number % range

  if(index && ((getDigit(number, index) % 2) === 0)) {
    return -value
  } else return value
}

export const getRandomColor = (number: number, colors: Array<string>, range: number) => {
  return colors[(number) % range]
}


export const getContrast = (hexColor: string) => {
  // If a leading # is provided, remove it
  if (hexColor.slice(0, 1) === '#') {
    hexColor = hexColor.slice(1);
  }

  // Convert to RGB value
  const r = parseInt(hexColor.substr(0, 2), 16);
  const g = parseInt(hexColor.substr(2,2),16);
  const b = parseInt(hexColor.substr(4,2),16);

  // Get YIQ ratio
  const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;

  // Check contrast
  return (yiq >= 128) ? 'black' : 'white';
};
