'use client';

import React from 'react';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange, disabled = false }) => {
  return (
    <div className="flex items-center mb-3">
      <input
        type="checkbox"
        id={`checkbox-${label}`}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 disabled:opacity-50"
      />
      <label
        htmlFor={`checkbox-${label}`}
        className={`ml-2 text-sm font-medium ${disabled ? 'text-gray-400' : 'text-gray-700'}`}
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
