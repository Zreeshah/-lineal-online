export const MM_PER_INCH = 25.4;

const millimetersPerUnit = {
  inch: MM_PER_INCH,
  cm: 10,
  mm: 1,
};

export const convertLength = (value, fromUnit, toUnit) => {
  if (!Number.isFinite(value)) return Number.NaN;
  if (!(fromUnit in millimetersPerUnit) || !(toUnit in millimetersPerUnit)) {
    throw new RangeError('Unsupported length unit');
  }

  return (value * millimetersPerUnit[fromUnit]) / millimetersPerUnit[toUnit];
};

export const calculateScreenMetrics = ({
  diagonalInches,
  aspectWidth,
  aspectHeight,
  pixelWidth,
  pixelHeight,
}) => {
  const values = [diagonalInches, aspectWidth, aspectHeight, pixelWidth, pixelHeight];
  if (values.some((value) => !Number.isFinite(value) || value <= 0)) {
    throw new RangeError('Screen values must be positive numbers');
  }

  const aspectDiagonal = Math.hypot(aspectWidth, aspectHeight);
  const widthInches = (diagonalInches * aspectWidth) / aspectDiagonal;
  const heightInches = (diagonalInches * aspectHeight) / aspectDiagonal;
  const ppi = Math.hypot(pixelWidth, pixelHeight) / diagonalInches;

  return {
    widthInches,
    heightInches,
    widthCm: convertLength(widthInches, 'inch', 'cm'),
    heightCm: convertLength(heightInches, 'inch', 'cm'),
    ppi,
  };
};
