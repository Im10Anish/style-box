'use client';
import { DivStyles } from '@/types';
import calculateStyles from '@/utils/calculateStyles';
import { motion } from 'framer-motion';
import React from 'react';

interface PreviewSectionProps {
  divStyles: DivStyles;
}

const PreviewSection: React.FC<PreviewSectionProps> = ({ divStyles }) => {
  const previewStyles = calculateStyles(divStyles);

  return (
    <div className="h-full bg-white border-b border-gray-200">
      <div className="bg-gray-50 p-4 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-900">Preview</h2>
      </div>
      <div className="flex items-center justify-center h-[calc(100%-56px)] p-6 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="relative">
          <div className="absolute -inset-4 rounded-lg bg-white/30 backdrop-blur-sm"></div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div style={previewStyles} className="preview-div">
              {divStyles.text.enabled ? divStyles.text.content : ''}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PreviewSection;
