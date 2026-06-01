
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface CalibrationContextType {
  pixelsPerCm: number;
  setPixelsPerCm: (pixelsPerCm: number) => void;
  calibrateByScreen: (screenSizeInches: number) => void;
  calibrateByCard: () => void;
  adjustCalibration: (direction: 'up' | 'down') => void;
  autoCalibrate: () => void;
  unit: 'cm' | 'mm' | 'inch';
  setUnit: (unit: 'cm' | 'mm' | 'inch') => void;
  orientation: 'horizontal' | 'vertical';
  setOrientation: (orientation: 'horizontal' | 'vertical') => void;
  getValueInSelectedUnit: (pixelValue: number) => number;
  getPixelsFromValue: (value: number) => number;
}

const CalibrationContext = createContext<CalibrationContextType | undefined>(undefined);

// Standard sizes and conversion factors
const CREDIT_CARD_WIDTH_MM = 85.6;
const MM_PER_INCH = 25.4;
const CM_PER_INCH = 2.54;

export const CalibrationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [pixelsPerCm, setPixelsPerCm] = useState<number>(38); // Default calibration
  const [unit, setUnit] = useState<'cm' | 'mm' | 'inch'>('cm');
  const [orientation, setOrientation] = useState<'horizontal' | 'vertical'>('horizontal');
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState<number>(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    
    // Initial auto-calibration - run once on mount
    autoCalibrate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Calculate physical screen size using DPI and screen dimensions
  const calculatePhysicalScreenSize = (): number => {
    // Try to use more accurate method using screen.width/height if available
    // These values are in physical pixels
    const screenObj = window.screen;
    if (screenObj && screenObj.width && screenObj.height) {
      // Get device pixel ratio - number of screen pixels per CSS pixel
      const dpr = window.devicePixelRatio || 1;
      
      // Standard reference DPI - baseline for most calculations
      const standardDPI = 96;
      
      // Adjust DPI based on pixel ratio
      const dpi = dpr * standardDPI;
      
      // Calculate physical dimensions
      const widthInInches = screenObj.width / dpi;
      const heightInInches = screenObj.height / dpi;
      
      // Pythagoras to calculate diagonal
      const diagonalInInches = Math.sqrt(widthInInches * widthInInches + heightInInches * heightInInches);
      
      // If we get a reasonable size, return it
      if (diagonalInInches > 3 && diagonalInInches < 40) {
        console.log('Screen auto-calibration:', diagonalInInches.toFixed(1) + ' inches');
        return diagonalInInches;
      }
    }
    
    // Fallback to window dimensions if screen dimensions aren't reliable
    const dpr = window.devicePixelRatio || 1;
    const dpi = dpr * 96;
    const widthInInches = screenWidth / dpi;
    const heightInInches = screenHeight / dpi;
    
    // Pythagoras to calculate diagonal
    return Math.sqrt(widthInInches * widthInInches + heightInInches * heightInInches);
  };

  const autoCalibrate = () => {
    // Try to detect the physical screen size
    const estimatedScreenSizeInches = calculatePhysicalScreenSize();
    
    if (estimatedScreenSizeInches > 3) {
      // If we got a reasonable value, use it
      calibrateByScreen(estimatedScreenSizeInches);
      console.log('Auto-calibrated to:', estimatedScreenSizeInches.toFixed(1) + ' inches');
    } else {
      // Fallback to a common screen size based on device width
      if (screenWidth < 600) {
        // Probably a phone
        calibrateByScreen(5.5);
        console.log('Auto-calibrated to default phone size: 5.5 inches');
      } else if (screenWidth < 1024) {
        // Probably a tablet
        calibrateByScreen(10);
        console.log('Auto-calibrated to default tablet size: 10 inches');
      } else {
        // Probably a desktop/laptop
        calibrateByScreen(15.6);
        console.log('Auto-calibrated to default laptop size: 15.6 inches');
      }
    }
  };

  const calibrateByScreen = (screenSizeInches: number) => {
    // Calculate the pixels per inch based on the screen's diagonal size
    const screenDiagonalPixels = Math.sqrt(
      Math.pow(screenWidth, 2) + Math.pow(screenHeight, 2)
    );
    const pixelsPerInch = screenDiagonalPixels / screenSizeInches;
    const newPixelsPerCm = pixelsPerInch / CM_PER_INCH;
    
    console.log('Calibrated to screen size:', screenSizeInches, 'inches');
    console.log('Calculated pixels per cm:', newPixelsPerCm.toFixed(2));
    
    setPixelsPerCm(newPixelsPerCm);
  };

  const calibrateByCard = () => {
    // Standard credit card width (85.6mm)
    // We'll use 30% of screen width as a reasonable size for the credit card
    const creditCardWidthPixels = screenWidth * 0.3;
    const pixelsPerMm = creditCardWidthPixels / CREDIT_CARD_WIDTH_MM;
    const newPixelsPerCm = pixelsPerMm * 10; // 10mm in 1cm
    
    setPixelsPerCm(newPixelsPerCm);
  };

  const adjustCalibration = (direction: 'up' | 'down') => {
    const adjustmentFactor = direction === 'up' ? 1.05 : 0.95;
    setPixelsPerCm(prev => prev * adjustmentFactor);
  };

  const getValueInSelectedUnit = (pixelValue: number): number => {
    switch (unit) {
      case 'cm':
        return pixelValue / pixelsPerCm;
      case 'mm':
        return (pixelValue / pixelsPerCm) * 10;
      case 'inch':
        return pixelValue / (pixelsPerCm * CM_PER_INCH);
      default:
        return pixelValue / pixelsPerCm;
    }
  };

  const getPixelsFromValue = (value: number): number => {
    switch (unit) {
      case 'cm':
        return value * pixelsPerCm;
      case 'mm':
        return (value / 10) * pixelsPerCm;
      case 'inch':
        return value * pixelsPerCm * CM_PER_INCH;
      default:
        return value * pixelsPerCm;
    }
  };

  return (
    <CalibrationContext.Provider
      value={{
        pixelsPerCm,
        setPixelsPerCm,
        calibrateByScreen,
        calibrateByCard,
        adjustCalibration,
        autoCalibrate,
        unit,
        setUnit,
        orientation,
        setOrientation,
        getValueInSelectedUnit,
        getPixelsFromValue
      }}
    >
      {children}
    </CalibrationContext.Provider>
  );
};

export const useCalibration = (): CalibrationContextType => {
  const context = useContext(CalibrationContext);
  if (context === undefined) {
    throw new Error('useCalibration must be used within a CalibrationProvider');
  }
  return context;
};
