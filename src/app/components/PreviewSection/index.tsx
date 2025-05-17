'use client';
import { DivStyles } from '@/types';
import React from 'react';

interface PreviewSectionProps {
  divStyles: DivStyles;
}

const PreviewSection: React.FC<PreviewSectionProps> = ({ divStyles }) => {
  console.log('PreviewSection divStyles:', divStyles);

  return <div>Preview</div>;
};

export default PreviewSection;
