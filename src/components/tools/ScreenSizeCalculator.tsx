import React from 'react';
import { Monitor } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { calculateScreenMetrics } from '@/lib/measurementMath.js';

const aspectRatios = [
  { label: '16:9', width: 16, height: 9 },
  { label: '16:10', width: 16, height: 10 },
  { label: '3:2', width: 3, height: 2 },
  { label: '4:3', width: 4, height: 3 },
  { label: '21:9', width: 21, height: 9 },
];

const parseInput = (value: string) => Number.parseFloat(value.replace(',', '.'));
const format = (value: number, digits = 2) =>
  Number.isFinite(value) ? new Intl.NumberFormat('de-DE', { maximumFractionDigits: digits }).format(value) : '–';

const ScreenSizeCalculator: React.FC = () => {
  const [diagonal, setDiagonal] = React.useState('15,6');
  const [ratio, setRatio] = React.useState('16:9');
  const [pixelWidth, setPixelWidth] = React.useState('1920');
  const [pixelHeight, setPixelHeight] = React.useState('1080');
  const selectedRatio = aspectRatios.find((item) => item.label === ratio) || aspectRatios[0];

  let metrics = null;
  try {
    metrics = calculateScreenMetrics({
      diagonalInches: parseInput(diagonal),
      aspectWidth: selectedRatio.width,
      aspectHeight: selectedRatio.height,
      pixelWidth: parseInput(pixelWidth),
      pixelHeight: parseInput(pixelHeight),
    });
  } catch {
    metrics = null;
  }

  return (
    <Card className="border-purple-200 bg-white shadow-sm">
      <CardContent className="p-5 sm:p-7">
        <div className="grid gap-7 lg:grid-cols-[minmax(0,360px)_1fr]">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="screen-diagonal">Diagonale in Zoll</Label>
              <Input id="screen-diagonal" value={diagonal} onChange={(event) => setDiagonal(event.target.value)} inputMode="decimal" className="mt-2" />
            </div>
            <div>
              <Label htmlFor="aspect-ratio">Seitenverhältnis</Label>
              <select id="aspect-ratio" value={ratio} onChange={(event) => setRatio(event.target.value)} className="mt-2 h-10 w-full rounded-md border border-input bg-background px-3">
                {aspectRatios.map((item) => <option key={item.label} value={item.label}>{item.label}</option>)}
              </select>
            </div>
            <div>
              <Label htmlFor="pixel-width">Auflösung Breite</Label>
              <Input id="pixel-width" value={pixelWidth} onChange={(event) => setPixelWidth(event.target.value)} inputMode="numeric" className="mt-2" />
            </div>
            <div>
              <Label htmlFor="pixel-height">Auflösung Höhe</Label>
              <Input id="pixel-height" value={pixelHeight} onChange={(event) => setPixelHeight(event.target.value)} inputMode="numeric" className="mt-2" />
            </div>
          </div>

          <div className="min-w-0">
            <svg viewBox="0 0 620 260" className="h-auto w-full" role="img" aria-labelledby="screen-diagram-title screen-diagram-desc">
              <title id="screen-diagram-title">Bildschirmbreite, Bildschirmhöhe und Diagonale</title>
              <desc id="screen-diagram-desc">Ein beschriftetes Rechteck zeigt die aus Diagonale und Seitenverhältnis berechneten Bildschirmmaße.</desc>
              <rect width="620" height="260" fill="#f8fafc" />
              <rect x="90" y="42" width="440" height="176" rx="5" fill="#ede9fe" stroke="#5b21b6" strokeWidth="3" />
              <line x1="90" y1="218" x2="530" y2="42" stroke="#dc2626" strokeWidth="3" />
              <text x="310" y="242" textAnchor="middle" fontSize="16" fontWeight="700" fill="#111827">Breite {format(metrics?.widthCm)} cm</text>
              <text x="64" y="134" textAnchor="middle" fontSize="16" fontWeight="700" fill="#111827" transform="rotate(-90 64 134)">Höhe {format(metrics?.heightCm)} cm</text>
              <text x="326" y="118" textAnchor="middle" fontSize="18" fontWeight="700" fill="#991b1b" transform="rotate(-22 326 118)">{format(parseInput(diagonal), 1)} Zoll</text>
              <Monitor x="288" y="132" width="44" height="44" color="#5b21b6" aria-hidden="true" />
            </svg>

            <dl className="mt-4 grid grid-cols-2 overflow-hidden rounded-md border border-gray-200 sm:grid-cols-3">
              <div className="border-b border-r border-gray-200 p-4 sm:border-b-0"><dt className="text-xs font-semibold uppercase text-gray-500">Breite</dt><dd className="mt-1 text-xl font-bold">{format(metrics?.widthCm)} cm</dd></div>
              <div className="border-b border-gray-200 p-4 sm:border-b-0 sm:border-r"><dt className="text-xs font-semibold uppercase text-gray-500">Höhe</dt><dd className="mt-1 text-xl font-bold">{format(metrics?.heightCm)} cm</dd></div>
              <div className="col-span-2 p-4 sm:col-span-1"><dt className="text-xs font-semibold uppercase text-gray-500">Pixeldichte</dt><dd className="mt-1 text-xl font-bold">{format(metrics?.ppi, 1)} PPI</dd></div>
            </dl>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ScreenSizeCalculator;
