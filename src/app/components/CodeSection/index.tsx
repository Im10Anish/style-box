'use client';
import { DivStyles } from '@/types';
import generateCss from '@/utils/generateCss';
import generateHtml from '@/utils/generateHtml';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CodeBlock from '@/app/ui/CodeBlock';
interface CodeSectionProps {
  divStyles: DivStyles;
}

const CodeSection: React.FC<CodeSectionProps> = ({ divStyles }) => {
  const [activeTab, setActiveTab] = useState<'html' | 'css'>('html');
  const [copySuccess, setCopySuccess] = useState<boolean>(false);

  //Generate HTML and CSS code based on divStyles
  const htmlCode = generateHtml(divStyles);
  const cssCode = generateCss(divStyles);

  // Function to copy code to clipboard
  const handleCopy = () => {
    setCopySuccess(true);
    navigator.clipboard
      .writeText(activeTab === 'html' ? htmlCode : cssCode)
      .then(() => {
        setTimeout(() => {
          setCopySuccess(false);
        }, 2000);
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  // Function to handle tab change
  const handleTabChange = (tab: 'html' | 'css') => {
    setActiveTab(tab);
    setCopySuccess(false);
  };

  return (
    <div className="h-full bg-white border-t border-gray-200">
      <div className="flex items-center justify-between bg-gray-50 px-4 py-3 border-b border-gray-200">
        <div className="flex space-x-1">
          <button
            className={`px-3 py-1 text-sm font-medium rounded-md ${activeTab === 'html' ? 'bg-white text-indigo-600 shadow-sm' : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'}`}
            onClick={() => handleTabChange('html')}
          >
            HTML
          </button>
          <button
            className={`px-3 py-1 text-sm font-medium rounded-md ${
              activeTab === 'css'
                ? 'bg-white text-indigo-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
            }`}
            onClick={() => setActiveTab('css')}
          >
            CSS
          </button>
        </div>

        {copySuccess && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute right-4 top-14 bg-green-100 text-green-800 px-3 py-1 rounded-md text-sm shadow-md"
          >
            Copied to clipboard!
          </motion.div>
        )}
      </div>

      <div className="p-4 h-[calc(100%-48px)] overflow-auto bg-gray-50">
        {activeTab === 'html' ? (
          <CodeBlock code={htmlCode} language="html" onCopy={handleCopy} />
        ) : (
          <CodeBlock code={cssCode} language="css" onCopy={handleCopy} />
        )}
      </div>
    </div>
  );
};

export default CodeSection;
