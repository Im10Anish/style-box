'use client';

import React from 'react';
import ControlGroup from './ControlGroup';
import Slider from './Slider';
import Select from './Select';
import ColorPicker from './ColorPicker';
import { DivStyles } from '@/types';

interface BackgroundControlProps {
  divStyles: DivStyles;
  updateNestedProperty: (
    parent: keyof DivStyles,
    property: string,
    value: string | number | object | boolean
  ) => void;
}

const BackgroundControl: React.FC<BackgroundControlProps> = ({
  divStyles,
  updateNestedProperty,
}) => {
  const { background } = divStyles;

  const handleTypeChange = (value: string) => {
    updateNestedProperty('background', 'type', value as 'color' | 'gradient');
  };

  const handleColorChange = (value: string) => {
    updateNestedProperty('background', 'color', value);
  };

  const handleGradientTypeChange = (value: string) => {
    updateNestedProperty('background', 'gradient', {
      ...background.gradient,
      type: value as 'linear' | 'radial',
    });
  };

  const handleGradientAngleChange = (value: number) => {
    updateNestedProperty('background', 'gradient', {
      ...background.gradient,
      angle: value,
    });
  };

  const handleGradientColorChange = (index: number, value: string) => {
    const newColors = [...background.gradient.colors];
    newColors[index] = {
      ...newColors[index],
      color: value,
    };
    updateNestedProperty('background', 'gradient', {
      ...background.gradient,
      colors: newColors,
    });
  };

  const handleGradientPositionChange = (index: number, value: number) => {
    const updatedColors = [...background.gradient.colors];
    updatedColors[index] = {
      ...updatedColors[index],
      position: value,
    };

    updateNestedProperty('background', 'gradient', {
      ...background.gradient,
      colors: updatedColors,
    });
  };

  const addGradientColor = () => {
    const colors = [...background.gradient.colors];
    const lastColor = colors[colors.length - 1];

    // Create a new color stop with position incremented by 20% (capped at 100%)
    const newPosition = Math.min(lastColor.position + 20, 100);

    colors.push({
      position: newPosition,
      color: lastColor.color,
    });

    updateNestedProperty('background', 'gradient', {
      ...background.gradient,
      colors: colors,
    });
  };

  const removeGradientColor = (index: number) => {
    // Don't remove if we only have 2 colors left (minimum for a gradient)
    if (background.gradient.colors.length <= 2) return;

    const colors = [...background.gradient.colors];
    colors.splice(index, 1);

    updateNestedProperty('background', 'gradient', {
      ...background.gradient,
      colors,
    });
  };

  return (
    <ControlGroup title="Background">
      <Select
        label="Type"
        value={background.type}
        options={[
          { value: 'color', label: 'Solid Color' },
          { value: 'gradient', label: 'Gradient' },
        ]}
        onChange={handleTypeChange}
      />

      {background.type === 'color' ? (
        <ColorPicker
          label="Color"
          color={background.color}
          onChange={handleColorChange}
          allowAlpha
        />
      ) : (
        <div className="mt-4">
          <Select
            label="Gradient Type"
            value={background.gradient.type}
            options={[
              { value: 'linear', label: 'Linear' },
              { value: 'radial', label: 'Radial' },
            ]}
            onChange={handleGradientTypeChange}
          />

          {background.gradient.type === 'linear' && (
            <Slider
              label="Angle"
              value={background.gradient.angle}
              unit="deg"
              min={0}
              max={360}
              step={1}
              onValueChange={handleGradientAngleChange}
              units={['deg']}
            />
          )}
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Gradient Stops</label>
            <div
              className="h-8 mb-4 rounded"
              style={{
                background:
                  background.gradient.type === 'linear'
                    ? `linear-gradient(${background.gradient.angle}deg, ${background.gradient.colors
                        .map((c) => `${c.color} ${c.position}%`)
                        .join(', ')})`
                    : `radial-gradient(circle, ${background.gradient.colors
                        .map((c) => `${c.color} ${c.position}%`)
                        .join(', ')})`,
              }}
            ></div>
            {background.gradient.colors.map((colorStop, index) => (
              <div key={index} className="p-3 mb-3 bg-gray-50 rounded-md border border-gray-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Stop {index + 1}</span>
                  {background.gradient.colors.length > 2 && (
                    <button
                      className="text-xs px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                      onClick={() => removeGradientColor(index)}
                    >
                      Remove
                    </button>
                  )}
                </div>

                <ColorPicker
                  label="Color"
                  color={colorStop.color}
                  onChange={(color) => handleGradientColorChange(index, color)}
                  allowAlpha
                />

                <Slider
                  label="Position"
                  value={colorStop.position}
                  unit="%"
                  min={0}
                  max={100}
                  step={1}
                  onValueChange={(value) => handleGradientPositionChange(index, value)}
                  units={['%']}
                />
              </div>
            ))}

            <button
              className="w-full mt-2 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={addGradientColor}
            >
              Add Color Stop
            </button>
          </div>
        </div>
      )}
    </ControlGroup>
  );
};

export default BackgroundControl;
