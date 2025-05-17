'use client';

const DivConfigurator: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex flex-col flex-grow w-[70%]">
        <div className="h-1/2">Preview</div>
        <div className="h-1/2">Code</div>
      </div>
      <div className="w-[30%]">ControlPanel</div>
    </div>
  );
};

export default DivConfigurator;
