'use client';
import { DivStyles } from '@/types';
import React from 'react';

interface CodeSectionProps {
  divStyles: DivStyles;
}

const CodeSection: React.FC<CodeSectionProps> = ({ divStyles }) => {
  console.log('CodeSection divStyles:', divStyles);

  return <div>Code</div>;
};

export default CodeSection;
