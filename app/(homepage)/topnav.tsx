import { useState } from 'react';

export default function TopNav() {
  const [activeTab, setActiveTab] = useState('All Current');

  const tabs = [
    'All Current',
    'Not Started',
    'Editing',
    'Revising',
    'Draft',
    'Final',
    'Completed',
  ];

  return (
    <div className="flex items-center justify-between bg-slate-50 text-zinc-500 px-6  border-b">
      <div className="flex space-x-4">
        {tabs.map((tab) => (
          <span
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4  font-medium cursor-pointer ${
              activeTab === tab
                ? 'text-red-500 border-b-2 border-red-500'
                : 'hover:text-red-500 hover:border-b-2 hover:border-red-500'
            }`}
          >
            {tab}
          </span>
        ))}
      </div>
    </div>
  );
}
