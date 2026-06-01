
import { useState, useEffect } from "react";
import { useIsMobile } from "./use-mobile";

export type DeviceType = "iPhone" | "Android" | "iPad" | "Desktop" | "Unknown";

export function useDeviceInfo() {
  const [deviceType, setDeviceType] = useState<DeviceType>("Unknown");
  const [screenSize, setScreenSize] = useState<number>(0);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Detect device type based on user agent
    const userAgent = navigator.userAgent.toLowerCase();
    
    if (userAgent.includes("iphone")) {
      setDeviceType("iPhone");
    } else if (userAgent.includes("ipad")) {
      setDeviceType("iPad");
    } else if (userAgent.includes("android")) {
      setDeviceType("Android");
    } else if (!isMobile) {
      setDeviceType("Desktop");
    } else {
      setDeviceType("Unknown");
    }
    
    // Detect screen size in inches
    const calculateScreenSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const screenWidth = window.screen.width * dpr;
      const screenHeight = window.screen.height * dpr;
      
      // Calculate physical dimensions using DPI
      const standardDPI = 96;
      const dpi = dpr * standardDPI;
      
      const widthInInches = screenWidth / dpi;
      const heightInInches = screenHeight / dpi;
      
      // Pythagoras to calculate diagonal
      const diagonalInInches = Math.sqrt(widthInInches * widthInInches + heightInInches * heightInInches);
      
      // Round to 2 decimal places
      return parseFloat(diagonalInInches.toFixed(2));
    };
    
    setScreenSize(calculateScreenSize());
  }, [isMobile]);
  
  const redetectScreenSize = () => {
    const newSize = calculateScreenSize();
    setScreenSize(newSize);
  };
  
  const calculateScreenSize = () => {
    const dpr = window.devicePixelRatio || 1;
    const screenWidth = window.screen.width * dpr;
    const screenHeight = window.screen.height * dpr;
    
    // Calculate physical dimensions using DPI
    const standardDPI = 96;
    const dpi = dpr * standardDPI;
    
    const widthInInches = screenWidth / dpi;
    const heightInInches = screenHeight / dpi;
    
    // Pythagoras to calculate diagonal
    const diagonalInInches = Math.sqrt(widthInInches * widthInInches + heightInInches * heightInInches);
    
    // Round to 2 decimal places
    return parseFloat(diagonalInInches.toFixed(2));
  };
  
  return {
    deviceType,
    screenSize,
    redetectScreenSize,
    setScreenSize
  };
}
