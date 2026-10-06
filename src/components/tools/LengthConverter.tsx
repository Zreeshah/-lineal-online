import React from 'react';
import { ArrowLeftRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { convertLength } from '@/lib/measurementMath.js';

type LengthUnit = 'inch' | 'cm' | 'mm';

const units: Array<{ value: LengthUnit; label: string }> = [
  { value: 'inch', label: 'Zoll' },
  { value: 'cm', label: 'cm' },
  { value: 'mm', label: 'mm' },
];

const formatValue = (value: number) =>
  Number.isFinite(value)
    ? new Intl.NumberFormat('de-DE', { maximumFractionDigits: 4 }).format(value)
    : '–';

const LengthConverter: React.FC = () => {
  const [sourceUnit, setSourceUnit] = React.useState<LengthUnit>('inch');
  const [inputValue, setInputValue] = React.useState('1');
  const numericValue = Number.parseFloat(inputValue.replace(',', '.'));

  return (
    <Card className="border-purple-200 bg-white shadow-sm">
      <CardContent className="p-5 sm:p-7">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-md bg-purple-100 text-purple-700">
            <ArrowLeftRight size={22} aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase text-purple-700">Ausgangseinheit wählen</p>
            <p className="text-sm text-gray-600">Das Ergebnis wird gleichzeitig in allen drei Einheiten berechnet.</p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-[minmax(0,280px)_1fr]">
          <div>
            <div className="mb-4 inline-flex rounded-md border border-gray-200 bg-gray-50 p-1" role="group" aria-label="Ausgangseinheit">
              {units.map((unit) => (
                <button
                  key={unit.value}
                  type="button"
                  aria-pressed={sourceUnit === unit.value}
                  onClick={() => setSourceUnit(unit.value)}
                  className={`min-h-10 px-4 text-sm font-semibold transition-colors ${
                    sourceUnit === unit.value ? 'rounded bg-purple-700 text-white' : 'text-gray-700 hover:text-purple-800'
                  }`}
                >
                  {unit.label}
                </button>
              ))}
            </div>
            <Label htmlFor="length-value">Wert in {units.find((unit) => unit.value === sourceUnit)?.label}</Label>
            <Input
              id="length-value"
              inputMode="decimal"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              className="mt-2 h-12 text-lg"
              aria-describedby="length-value-hint"
            />
            <p id="length-value-hint" className="mt-2 text-sm text-gray-500">Komma oder Punkt sind als Dezimalzeichen möglich.</p>
          </div>

          <dl className="grid min-h-[170px] grid-cols-1 overflow-hidden rounded-md border border-gray-200 sm:grid-cols-3">
            {units.map((unit) => (
              <div key={unit.value} className="flex min-w-0 flex-col justify-center border-b border-gray-200 p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
                <dt className="text-sm font-semibold text-gray-500">{unit.label}</dt>
                <dd className="mt-2 break-words text-2xl font-bold text-gray-950">
                  {formatValue(convertLength(numericValue, sourceUnit, unit.value))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </CardContent>
    </Card>
  );
};

export default LengthConverter;
