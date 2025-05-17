'use client';
import React, { useState } from 'react';
import { initialDivStyle } from '@/utils/initialDivStyle';
import ControlSection from '../ControlPanel';
import PreviewSection from '../PreviewSection';
import CodeSection from '../CodeSection';

const DivConfigurator: React.FC = () => {
  const [divStyle, setDivStyle] = useState(initialDivStyle);

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex flex-col flex-grow w-[70%]">
        <div className="h-1/2">
          <PreviewSection divStyles={divStyle} />
        </div>
        <div className="h-1/2">
          <CodeSection divStyles={divStyle} />
        </div>
      </div>
      <div className="w-[30%]">
        <ControlSection divStyles={divStyle} setDivStyles={setDivStyle} />
      </div>
    </div>
  );
};

export default DivConfigurator;
