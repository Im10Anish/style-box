'use client';

import React from 'react';
import ControlGroup from './ControlGroup';
import Slider from './Slider';
import Select from './Select';
import ColorPicker from './ColorPicker';
import Checkbox from './Checkbox';
import { DivStyles, Unit } from '@/types';

interface BorderControlProps {
  divStyles: DivStyles;
  updateNestedProperty: (
    parent: keyof DivStyles,
    property: string,
    value: string | number | object | boolean
  ) => void;
}

const BorderControl: React.FC<BorderControlProps> = ({ divStyles, updateNestedProperty }) => {
  const { border } = divStyles;

  // Border width section
  const handleWidthLinkToggle = (checked: boolean) => {
    if (checked) {
      // If linking, set all sides to the top value
      const topValue = border.width.top;
      updateNestedProperty('border', 'width', {
        top: topValue,
        right: { ...topValue },
        bottom: { ...topValue },
        left: { ...topValue },
        linked: true,
      });
    } else {
      // If unlinking, just update the linked status
      updateNestedProperty('border', 'width', {
        ...border.width,
        linked: false,
      });
    }
  };

  const handleLinkedWidthChange = (value: number) => {
    updateNestedProperty('border', 'width', {
      top: { ...border.width.top, value },
      right: { ...border.width.top, value },
      bottom: { ...border.width.top, value },
      left: { ...border.width.top, value },
      linked: true,
    });
  };

  const handleLinkedWidthUnitChange = (unit: Unit) => {
    updateNestedProperty('border', 'width', {
      top: { ...border.width.top, unit },
      right: { ...border.width.top, unit },
      bottom: { ...border.width.top, unit },
      left: { ...border.width.top, unit },
      linked: true,
    });
  };

  const handleSideWidthChange = (side: 'top' | 'right' | 'bottom' | 'left', value: number) => {
    updateNestedProperty('border', 'width', {
      ...border.width,
      [side]: { ...border.width[side], value },
    });
  };

  const handleSideWidthUnitChange = (side: 'top' | 'right' | 'bottom' | 'left', unit: Unit) => {
    updateNestedProperty('border', 'width', {
      ...border.width,
      [side]: { ...border.width[side], unit },
    });
  };

  // Border style section
  const handleStyleLinkToggle = (checked: boolean) => {
    if (checked) {
      const topStyle = border.style.top;
      updateNestedProperty('border', 'style', {
        top: topStyle,
        right: topStyle,
        bottom: topStyle,
        left: topStyle,
        linked: true,
      });
    } else {
      updateNestedProperty('border', 'style', {
        ...border.style,
        linked: false,
      });
    }
  };

  const handleLinkedStyleChange = (value: string) => {
    updateNestedProperty('border', 'style', {
      top: value,
      right: value,
      bottom: value,
      left: value,
      linked: true,
    });
  };

  const handleSideStyleChange = (side: 'top' | 'right' | 'bottom' | 'left', value: string) => {
    updateNestedProperty('border', 'style', {
      ...border.style,
      [side]: value,
    });
  };

  // Border color section
  const handleColorLinkToggle = (checked: boolean) => {
    if (checked) {
      const topColor = border.color.top;
      updateNestedProperty('border', 'color', {
        top: topColor,
        right: topColor,
        bottom: topColor,
        left: topColor,
        linked: true,
      });
    } else {
      updateNestedProperty('border', 'color', {
        ...border.color,
        linked: false,
      });
    }
  };

  const handleLinkedColorChange = (color: string) => {
    updateNestedProperty('border', 'color', {
      top: color,
      right: color,
      bottom: color,
      left: color,
      linked: true,
    });
  };

  const handleSideColorChange = (side: 'top' | 'right' | 'bottom' | 'left', color: string) => {
    updateNestedProperty('border', 'color', {
      ...border.color,
      [side]: color,
    });
  };

  // Border radius section
  const handleRadiusLinkToggle = (checked: boolean) => {
    if (checked) {
      const topLeftValue = border.radius.topLeft;
      updateNestedProperty('border', 'radius', {
        topLeft: topLeftValue,
        topRight: { ...topLeftValue },
        bottomRight: { ...topLeftValue },
        bottomLeft: { ...topLeftValue },
        linked: true,
      });
    } else {
      updateNestedProperty('border', 'radius', {
        ...border.radius,
        linked: false,
      });
    }
  };

  const handleLinkedRadiusChange = (value: number) => {
    updateNestedProperty('border', 'radius', {
      topLeft: { ...border.radius.topLeft, value },
      topRight: { ...border.radius.topLeft, value },
      bottomRight: { ...border.radius.topLeft, value },
      bottomLeft: { ...border.radius.topLeft, value },
      linked: true,
    });
  };

  const handleLinkedRadiusUnitChange = (unit: Unit) => {
    updateNestedProperty('border', 'radius', {
      topLeft: { ...border.radius.topLeft, unit },
      topRight: { ...border.radius.topLeft, unit },
      bottomRight: { ...border.radius.topLeft, unit },
      bottomLeft: { ...border.radius.topLeft, unit },
      linked: true,
    });
  };

  const handleCornerRadiusChange = (
    corner: 'topLeft' | 'topRight' | 'bottomRight' | 'bottomLeft',
    value: number
  ) => {
    updateNestedProperty('border', 'radius', {
      ...border.radius,
      [corner]: { ...border.radius[corner], value },
    });
  };

  const handleCornerRadiusUnitChange = (
    corner: 'topLeft' | 'topRight' | 'bottomRight' | 'bottomLeft',
    unit: Unit
  ) => {
    updateNestedProperty('border', 'radius', {
      ...border.radius,
      [corner]: { ...border.radius[corner], unit },
    });
  };

  // List of available border styles
  const borderStyleOptions = [
    { value: 'none', label: 'None' },
    { value: 'solid', label: 'Solid' },
    { value: 'dashed', label: 'Dashed' },
    { value: 'dotted', label: 'Dotted' },
    { value: 'double', label: 'Double' },
    { value: 'groove', label: 'Groove' },
    { value: 'ridge', label: 'Ridge' },
    { value: 'inset', label: 'Inset' },
    { value: 'outset', label: 'Outset' },
  ];

  return (
    <ControlGroup title="Border">
      {/* Border Width Section */}
      <div className="border-t border-gray-200 pt-4 mb-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-sm font-medium text-gray-700">Width</h3>
          <Checkbox
            label="Link All Sides"
            checked={border.width.linked}
            onChange={handleWidthLinkToggle}
          />
        </div>

        {border.width.linked ? (
          <Slider
            label="Width"
            value={border.width.top.value}
            unit={border.width.top.unit}
            min={0}
            max={20}
            step={1}
            onValueChange={handleLinkedWidthChange}
            onUnitChange={handleLinkedWidthUnitChange}
            units={['px', 'rem', 'em']}
          />
        ) : (
          <div className="p-3 bg-gray-50 rounded-md border border-gray-200">
            <Slider
              label="Top"
              value={border.width.top.value}
              unit={border.width.top.unit}
              min={0}
              max={20}
              step={1}
              onValueChange={(value) => handleSideWidthChange('top', value)}
              onUnitChange={(unit) => handleSideWidthUnitChange('top', unit)}
              units={['px', 'rem', 'em']}
            />

            <Slider
              label="Right"
              value={border.width.right.value}
              unit={border.width.right.unit}
              min={0}
              max={20}
              step={1}
              onValueChange={(value) => handleSideWidthChange('right', value)}
              onUnitChange={(unit) => handleSideWidthUnitChange('right', unit)}
              units={['px', 'rem', 'em']}
            />

            <Slider
              label="Bottom"
              value={border.width.bottom.value}
              unit={border.width.bottom.unit}
              min={0}
              max={20}
              step={1}
              onValueChange={(value) => handleSideWidthChange('bottom', value)}
              onUnitChange={(unit) => handleSideWidthUnitChange('bottom', unit)}
              units={['px', 'rem', 'em']}
            />

            <Slider
              label="Left"
              value={border.width.left.value}
              unit={border.width.left.unit}
              min={0}
              max={20}
              step={1}
              onValueChange={(value) => handleSideWidthChange('left', value)}
              onUnitChange={(unit) => handleSideWidthUnitChange('left', unit)}
              units={['px', 'rem', 'em']}
            />
          </div>
        )}
      </div>

      {/* Border Style Section */}
      <div className="border-t border-gray-200 pt-4 mb-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-sm font-medium text-gray-700">Style</h3>
          <Checkbox
            label="Link All Sides"
            checked={border.style.linked}
            onChange={handleStyleLinkToggle}
          />
        </div>

        {border.style.linked ? (
          <Select
            label="Style"
            value={border.style.top}
            options={borderStyleOptions}
            onChange={handleLinkedStyleChange}
          />
        ) : (
          <div className="p-3 bg-gray-50 rounded-md border border-gray-200">
            <Select
              label="Top"
              value={border.style.top}
              options={borderStyleOptions}
              onChange={(value) => handleSideStyleChange('top', value)}
            />

            <Select
              label="Right"
              value={border.style.right}
              options={borderStyleOptions}
              onChange={(value) => handleSideStyleChange('right', value)}
            />

            <Select
              label="Bottom"
              value={border.style.bottom}
              options={borderStyleOptions}
              onChange={(value) => handleSideStyleChange('bottom', value)}
            />

            <Select
              label="Left"
              value={border.style.left}
              options={borderStyleOptions}
              onChange={(value) => handleSideStyleChange('left', value)}
            />
          </div>
        )}
      </div>

      {/* Border Color Section */}
      <div className="border-t border-gray-200 pt-4 mb-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-sm font-medium text-gray-700">Color</h3>
          <Checkbox
            label="Link All Sides"
            checked={border.color.linked}
            onChange={handleColorLinkToggle}
          />
        </div>

        {border.color.linked ? (
          <ColorPicker
            label="Color"
            color={border.color.top}
            onChange={handleLinkedColorChange}
            allowAlpha={true}
          />
        ) : (
          <div className="p-3 bg-gray-50 rounded-md border border-gray-200">
            <ColorPicker
              label="Top"
              color={border.color.top}
              onChange={(color) => handleSideColorChange('top', color)}
              allowAlpha={true}
            />

            <ColorPicker
              label="Right"
              color={border.color.right}
              onChange={(color) => handleSideColorChange('right', color)}
              allowAlpha={true}
            />

            <ColorPicker
              label="Bottom"
              color={border.color.bottom}
              onChange={(color) => handleSideColorChange('bottom', color)}
              allowAlpha={true}
            />

            <ColorPicker
              label="Left"
              color={border.color.left}
              onChange={(color) => handleSideColorChange('left', color)}
              allowAlpha={true}
            />
          </div>
        )}
      </div>

      {/* Border Radius Section */}
      <div className="border-t border-gray-200 pt-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-sm font-medium text-gray-700">Border Radius</h3>
          <Checkbox
            label="Link All Corners"
            checked={border.radius.linked}
            onChange={handleRadiusLinkToggle}
          />
        </div>

        {border.radius.linked ? (
          <Slider
            label="Radius"
            value={border.radius.topLeft.value}
            unit={border.radius.topLeft.unit}
            min={0}
            max={100}
            step={1}
            onValueChange={handleLinkedRadiusChange}
            onUnitChange={handleLinkedRadiusUnitChange}
            units={['px', '%', 'rem', 'em']}
          />
        ) : (
          <div className="p-3 bg-gray-50 rounded-md border border-gray-200">
            <Slider
              label="Top Left"
              value={border.radius.topLeft.value}
              unit={border.radius.topLeft.unit}
              min={0}
              max={100}
              step={1}
              onValueChange={(value) => handleCornerRadiusChange('topLeft', value)}
              onUnitChange={(unit) => handleCornerRadiusUnitChange('topLeft', unit)}
              units={['px', '%', 'rem', 'em']}
            />

            <Slider
              label="Top Right"
              value={border.radius.topRight.value}
              unit={border.radius.topRight.unit}
              min={0}
              max={100}
              step={1}
              onValueChange={(value) => handleCornerRadiusChange('topRight', value)}
              onUnitChange={(unit) => handleCornerRadiusUnitChange('topRight', unit)}
              units={['px', '%', 'rem', 'em']}
            />

            <Slider
              label="Bottom Right"
              value={border.radius.bottomRight.value}
              unit={border.radius.bottomRight.unit}
              min={0}
              max={100}
              step={1}
              onValueChange={(value) => handleCornerRadiusChange('bottomRight', value)}
              onUnitChange={(unit) => handleCornerRadiusUnitChange('bottomRight', unit)}
              units={['px', '%', 'rem', 'em']}
            />

            <Slider
              label="Bottom Left"
              value={border.radius.bottomLeft.value}
              unit={border.radius.bottomLeft.unit}
              min={0}
              max={100}
              step={1}
              onValueChange={(value) => handleCornerRadiusChange('bottomLeft', value)}
              onUnitChange={(unit) => handleCornerRadiusUnitChange('bottomLeft', unit)}
              units={['px', '%', 'rem', 'em']}
            />
          </div>
        )}
      </div>
    </ControlGroup>
  );
};

export default BorderControl;
