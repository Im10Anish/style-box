'use client';
import { DivStyles } from '@/types';
import React from 'react';

interface ControlSectionProps {
  divStyles: DivStyles;
  setDivStyles: React.Dispatch<React.SetStateAction<DivStyles>>;
}

const ControlSection: React.FC<ControlSectionProps> = ({ divStyles, setDivStyles }) => {
  console.log('ControlSection divStyles:', divStyles, setDivStyles);

  return <div>Control</div>;
};

export default ControlSection;
