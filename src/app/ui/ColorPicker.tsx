'use client';

import React, { useState, useRef, useEffect } from 'react';
import { HexColorPicker, HexColorInput, HexAlphaColorPicker } from 'react-colorful';

interface ColorPickerProps {
  label: string;
  color: string;
  onChange: (color: string) => void;
  allowAlpha?: boolean;
  disabled?: boolean;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  label,
  color,
  onChange,
  allowAlpha = false,
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const popover = useRef<HTMLDivElement>(null);

  // Close the popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popover.current && !popover.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Format color for display/input
  const isHex = color.startsWith('#');
  const inputColor = isHex ? color : color;

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <label className="text-sm font-medium text-gray-700">{label}</label>
      </div>
      <div className="relative">
        <div className="flex items-center">
          <div
            className={`w-10 h-6 rounded border border-gray-300 mr-2 ${
              disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
            }`}
            style={{ backgroundColor: color }}
            onClick={() => !disabled && setIsOpen(true)}
          />
          <input
            type="text"
            className="flex-1 px-2 py-1 text-sm border border-gray-300 rounded bg-white disabled:bg-gray-100"
            value={inputColor}
            onChange={(e) => onChange(e.target.value)}
            disabled={disabled}
          />
        </div>

        {isOpen && !disabled && (
          <div className="absolute z-10 mt-2 p-2 bg-white rounded-md shadow-lg" ref={popover}>
            {allowAlpha ? (
              <HexAlphaColorPicker color={color} onChange={onChange} />
            ) : (
              <HexColorPicker color={color} onChange={onChange} />
            )}
            <div className="mt-2 flex items-center">
              <span className="text-xs mr-2 text-gray-500">#</span>
              <HexColorInput
                className="w-full text-sm px-2 py-1 border border-gray-300 rounded"
                color={color}
                onChange={onChange}
                prefixed={false}
                alpha={allowAlpha}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ColorPicker;
