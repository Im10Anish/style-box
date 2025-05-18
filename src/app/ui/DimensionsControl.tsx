'use client';
import { DivStyles, Unit, ValueWithUnit } from '@/types';
import React from 'react';
import Slider from './Slider';

interface DimensionsControlProps {
  divStyles: DivStyles;
  updateProperty: (style: keyof DivStyles, value: ValueWithUnit) => void;
}

const DimensionsControl: React.FC<DimensionsControlProps> = ({ divStyles, updateProperty }) => {
  const handleWidthValueChange = (value: number) => {
    updateProperty('width', {
      ...divStyles.width,
      value: value,
    });
  };

  const handleWidthUnitChange = (unit: Unit) => {
    updateProperty('width', {
      ...divStyles.width,
      unit: unit,
    });
  };

  const handleHeightValueChange = (value: number) => {
    updateProperty('height', {
      ...divStyles.height,
      value: value,
    });
  };

  const handleHeightUnitChange = (unit: Unit) => {
    updateProperty('height', {
      ...divStyles.height,
      unit: unit,
    });
  };

  return (
    <>
      <Slider
        label="Width"
        value={divStyles.width.value}
        unit={divStyles.width.unit}
        min={0}
        max={1000}
        step={1}
        onValueChange={handleWidthValueChange}
        onUnitChange={handleWidthUnitChange}
        units={['px', '%', 'rem', 'em', 'vw']}
      />
      <Slider
        label="Height"
        value={divStyles.height.value}
        unit={divStyles.height.unit}
        min={0}
        max={1000}
        step={1}
        onValueChange={handleHeightValueChange}
        onUnitChange={handleHeightUnitChange}
        units={['px', '%', 'rem', 'em', 'vh']}
      />
    </>
  );
};

export default DimensionsControl;
