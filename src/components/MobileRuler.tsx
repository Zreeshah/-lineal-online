import React, { useState, useRef, useEffect } from 'react';
import { useCalibration } from '@/contexts/CalibrationContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useDeviceInfo } from '@/hooks/use-device-info';
import { RefreshCw, Smartphone, RulerIcon, Maximize, Square, Pencil } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import HomeContent from '@/components/HomeContent';
import MenuButton from '@/components/MenuButton';
import { Card, CardContent } from '@/components/ui/card';
import HowToUseSection from '@/components/HowToUseSection';
import WhyPerfectSection from '@/components/WhyPerfectSection';
import FaqSection from '@/components/FaqSection';
import RulerSizesTable from '@/components/RulerSizesTable';
const MobileRuler: React.FC = () => {
  const {
    pixelsPerCm,
    unit,
    setUnit,
    getValueInSelectedUnit,
    getPixelsFromValue,
    calibrateByScreen
  } = useCalibration();
  const {
    deviceType,
    screenSize,
    redetectScreenSize,
    setScreenSize
  } = useDeviceInfo();
  const {
    t
  } = useLanguage();

  // Dynamic ruler height based on screen size
  const calculateRulerHeight = () => {
    // Ensure we show at least up to 25 units or screen size + buffer, whichever is larger
    const minHeight = 400; // Minimum height
    const unitsToShow = Math.max(25, Math.ceil(screenSize) + 5); // Show at least screen size + 5 units
    const heightPerUnit = 40; // Approximate pixels per unit
    return Math.max(minHeight, unitsToShow * heightPerUnit);
  };
  const [rulerHeight, setRulerHeight] = useState(calculateRulerHeight());
  const rulerRef = useRef<HTMLDivElement>(null);
  const [inputValue, setInputValue] = useState<string>(screenSize.toString());

  // Recalculate ruler height when screen size changes
  useEffect(() => {
    setRulerHeight(calculateRulerHeight());
    setInputValue(screenSize.toString());
  }, [screenSize]);
  useEffect(() => {
    calibrateByScreen(screenSize);
  }, [screenSize, calibrateByScreen]);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleInputBlur = () => {
    const newSize = parseFloat(inputValue);
    if (!isNaN(newSize) && newSize > 0) {
      setScreenSize(newSize);
      calibrateByScreen(newSize);
    } else {
      setInputValue(screenSize.toString());
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.currentTarget.blur();
    }
  };
  const generateTicks = () => {
    if (!rulerRef.current) return [];
    const ticks = [];
    // Increased maximum value to ensure all units are shown
    const maxValue = Math.max(25, Math.ceil(screenSize) + 5);
    const majorTickInterval = 1;
    const minorTickInterval = 0.2;
    for (let value = 0; value <= maxValue; value += minorTickInterval) {
      const roundedValue = Math.round(value * 10) / 10;
      if (roundedValue === 0) continue;
      let tickType = 'minor';
      if (roundedValue % majorTickInterval === 0) {
        tickType = 'major';
      }
      const position = getPixelsFromValue(roundedValue);
      const showLabel = tickType === 'major';
      let label = roundedValue.toString();
      ticks.push({
        position,
        type: tickType,
        showLabel,
        label,
        value: roundedValue
      });
    }
    return ticks;
  };
  const ticks = generateTicks();
  return <div className="relative mobile-ruler-container">
      <div className="px-2 pt-2 text-center flex justify-between items-center">
        <p className="text-xs text-gray-600 mb-1">(Scroll down to show full ruler)</p>
        <MenuButton />
      </div>
      
      {/* Updated container with dynamic height and scrollable area */}
      <div className="mobile-ruler-layout" style={{
      height: 'auto',
      maxHeight: '80vh',
      position: 'relative',
      overflowX: 'hidden',
      overflowY: 'auto'
    }}>
        <div className="ruler-container ruler-vertical mobile-ruler" ref={rulerRef} style={{
        width: '80px',
        height: `${rulerHeight}px`,
        position: 'relative',
        overflow: 'visible',
        margin: '0'
      }}>
          <div className="relative h-full w-full rounded-none">
            <div className="absolute h-full w-8 left-8 bg-transparent border-l border-[#9b87f5]"></div>
            
            {ticks.map((tick, index) => <div key={index} className="absolute">
                <div className="absolute" style={{
              width: tick.type === 'major' ? '32px' : '16px',
              height: '2px',
              top: `${tick.position}px`,
              left: tick.type === 'major' ? '28px' : '44px',
              transform: 'translateY(-50%)',
              backgroundColor: '#9b87f5'
            }}></div>
                
                {tick.showLabel && <div className="absolute font-bold" style={{
              top: `${tick.position}px`,
              left: '12px',
              transform: 'translateY(-50%)',
              color: '#7E69AB',
              fontSize: '20px'
            }}>
                    {tick.label}
                  </div>}
              </div>)}
            
            <div className="absolute text-sm bg-[#f1f0fb] px-2 rounded text-[#7E69AB] font-semibold" style={{
            bottom: '24px',
            left: '12px',
            transform: 'rotate(-90deg)',
            transformOrigin: 'left bottom'
          }}>
              {unit.toUpperCase()}
            </div>
          </div>
        </div>
        
        <div className="flex-1 px-2 absolute top-0 right-0 w-[calc(100%-80px)]">
          <div className="bg-white p-3 rounded-lg shadow-sm mb-4 max-w-[200px] mx-auto">
            <p className="text-xs font-medium mb-2">
              {deviceType} • {parseFloat(screenSize.toFixed(2))}"
            </p>
            
            <div className="flex items-center gap-2 mb-2">
              <div className="relative w-16 h-28 border border-gray-300 rounded-lg flex items-center justify-center flex-col">
                <span className="text-sm text-gray-500">Screen</span>
                <Input type="number" min="3" max="25" step="0.1" value={inputValue} onChange={handleInputChange} onBlur={handleInputBlur} onKeyDown={handleKeyDown} className="text-center h-8 w-14 text-sm font-bold" />
                <span className="text-xs">inches</span>
              </div>
              
              <div className="flex-grow flex flex-col">
                <p className="text-xs text-gray-500 mb-1">Enter your device's screen size</p>
                <Button onClick={redetectScreenSize} size="sm" variant="outline" className="w-full text-xs h-7 text-[#9b87f5] border-[#9b87f5] hover:bg-[#F1F0FB]">
                  <RefreshCw size={10} className="mr-1" />
                  Re-detect
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Homepage content after the ruler section */}
      
      
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-3 flex justify-center">
        <div className="flex items-center space-x-4">
          <a href="#" className={`text-[#9b87f5] ${unit === 'cm' ? 'font-bold' : ''}`} onClick={e => {
          e.preventDefault();
          setUnit('cm');
        }}>
            CM
          </a>
          <span className="text-gray-300">|</span>
          <a href="#" className={`text-[#9b87f5] ${unit === 'inch' ? 'font-bold' : ''}`} onClick={e => {
          e.preventDefault();
          setUnit('inch');
        }}>
            INCH
          </a>
          <span className="text-gray-300">|</span>
          <Link to="/blog/buscar-dni-por-nombre" className="text-[#9b87f5] text-sm">
            Blog
          </Link>
          <span className="text-gray-300">|</span>
          <Link to="/privacy" className="text-[#9b87f5] text-sm">
            {t('privacy')}
          </Link>
          <span className="text-gray-300">|</span>
          <Link to="/disclaimer" className="text-[#9b87f5] text-sm">
            {t('disclaimer')}
          </Link>
        </div>
      </div>
    </div>;
};
export default MobileRuler;