'use client';

import React from 'react';
import { Unit } from '@/types';

interface SliderProps {
  label: string;
  value: number;
  unit: Unit;
  min: number;
  max: number;
  step?: number;
  onValueChange: (value: number) => void;
  onUnitChange?: (unit: Unit) => void;
  units?: Unit[];
  disabled?: boolean;
}

const Slider: React.FC<SliderProps> = ({
  label,
  value,
  unit,
  min,
  max,
  step = 1,
  onValueChange,
  onUnitChange,
  units = ['px', 'em', '%', 'rem'],
  disabled = false,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    if (!isNaN(newValue)) {
      onValueChange(newValue);
    }
  };

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <label className="text-sm font-medium text-gray-700">{label}</label>
        <div className="flex items-center">
          <input
            type="number"
            className="w-16 text-right text-sm px-2 py-1 border border-gray-300 rounded mr-1 bg-white disabled:bg-gray-100"
            value={value}
            onChange={handleInputChange}
            disabled={disabled}
          />
          {onUnitChange && (
            <select
              className="text-xs px-1 py-1 border border-gray-300 rounded bg-white disabled:bg-gray-100"
              value={unit}
              onChange={(e) => onUnitChange(e.target.value as Unit)}
              disabled={disabled}
            >
              {units.map((unitOption) => (
                <option key={unitOption} value={unitOption}>
                  {unitOption}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onValueChange(parseFloat(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-500 disabled:accent-gray-400 disabled:cursor-not-allowed"
        disabled={disabled}
      />
    </div>
  );
};

export default Slider;
