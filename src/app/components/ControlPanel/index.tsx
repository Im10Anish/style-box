'use client';
import { DivStyles, ValueWithUnit } from '@/types';
import React from 'react';
import DimensionsControl from '@/app/ui/DimensionsControl';
import BackgroundControl from '@/app/ui/BackgroundControl';
import BorderControl from '@/app/ui/BorderControl';

interface ControlSectionProps {
  divStyles: DivStyles;
  setDivStyles: React.Dispatch<React.SetStateAction<DivStyles>>;
}

const ControlSection: React.FC<ControlSectionProps> = ({ divStyles, setDivStyles }) => {
  const updateProperty = (style: keyof DivStyles, value: ValueWithUnit) => {
    setDivStyles((prevStyles) => ({
      ...prevStyles,
      [style]: value,
    }));
  };

  const updateNestedProperty = (
    parent: keyof DivStyles,
    property: string,
    value: string | number | boolean | object
  ) => {
    setDivStyles((prev) => ({
      ...prev,
      [parent]: {
        ...(typeof prev[parent] === 'object' && prev[parent] !== null ? prev[parent] : {}),
        [property]: value,
      },
    }));
  };

  return (
    <div className="h-full bg-gray-50 border-1 border-gray-200 overflow-auto">
      <div className="sticky top-0 z-10 bg-gray-50 px-4 py-3 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-900">Control Panel</h2>
      </div>
      <div className="p-4 space-y-4">
        <DimensionsControl divStyles={divStyles} updateProperty={updateProperty} />
        <BackgroundControl divStyles={divStyles} updateNestedProperty={updateNestedProperty} />
        <BorderControl divStyles={divStyles} updateNestedProperty={updateNestedProperty} />
      </div>
    </div>
  );
};

export default ControlSection;
