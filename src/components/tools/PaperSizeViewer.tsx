import React from 'react';
import { RotateCw } from 'lucide-react';
import { useCalibration } from '@/contexts/CalibrationContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { paperSizes } from '@/lib/paperSizes.js';

const PaperSizeViewer: React.FC = () => {
  const { pixelsPerCm } = useCalibration();
  const [selectedName, setSelectedName] = React.useState('A4');
  const [landscape, setLandscape] = React.useState(false);
  const selected = paperSizes.find((size) => size.name === selectedName) || paperSizes[4];
  const widthMm = landscape ? selected.height : selected.width;
  const heightMm = landscape ? selected.width : selected.height;
  const widthPx = (widthMm / 10) * pixelsPerCm;
  const heightPx = (heightMm / 10) * pixelsPerCm;

  return (
    <Card className="border-purple-200 bg-white shadow-sm">
      <CardContent className="p-5 sm:p-7">
        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="w-full sm:max-w-xs">
            <Label htmlFor="paper-size">DIN-Format</Label>
            <select
              id="paper-size"
              value={selectedName}
              onChange={(event) => setSelectedName(event.target.value)}
              className="mt-2 h-11 w-full rounded-md border border-input bg-background px-3 text-base"
            >
              {paperSizes.map((size) => (
                <option key={size.name} value={size.name}>{size.name} – {size.width} × {size.height} mm</option>
              ))}
            </select>
          </div>
          <Button type="button" variant="outline" onClick={() => setLandscape((current) => !current)}>
            <RotateCw size={17} className="mr-2" aria-hidden="true" />
            Ausrichtung wechseln
          </Button>
        </div>

        <div className="mb-3 flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-600">
          <span><strong className="text-gray-900">{selected.name}</strong> in {landscape ? 'Querformat' : 'Hochformat'}</span>
          <span>{widthMm} × {heightMm} mm</span>
          <span>{(widthMm / 10).toFixed(1).replace('.', ',')} × {(heightMm / 10).toFixed(1).replace('.', ',')} cm</span>
        </div>

        <div className="max-h-[520px] overflow-auto rounded-md border border-gray-300 bg-gray-100 p-5" aria-label={`${selected.name} in kalibrierter Originalgröße`}>
          <div
            className="relative flex shrink-0 items-center justify-center border-2 border-gray-900 bg-white shadow-sm"
            style={{ width: `${widthPx}px`, height: `${heightPx}px` }}
          >
            <div className="sticky left-5 top-5 self-start pt-5 text-left">
              <p className="text-2xl font-black text-gray-950">{selected.name}</p>
              <p className="mt-1 text-sm text-gray-600">1:1 bei korrekter Kalibrierung</p>
              <p className="text-sm text-gray-600">{widthMm} × {heightMm} mm</p>
            </div>
          </div>
        </div>
        <p className="mt-3 text-sm leading-6 text-gray-600">
          Die Fläche wird mit der aktuellen Bildschirmkalibrierung gezeichnet. Große Formate können horizontal und vertikal gescrollt werden.
        </p>
      </CardContent>
    </Card>
  );
};

export default PaperSizeViewer;
