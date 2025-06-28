
import React, { useState } from 'react';

interface Tab {
  id: string;
  label: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

interface TabNavigationProps {
  tabs: Tab[];
}

const TabNavigation = ({ tabs }: TabNavigationProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || '');

  const activeTabContent = tabs.find(tab => tab.id === activeTab)?.content;

  return (
    <div className="w-full">
      {/* Tab Headers */}
      <div className="flex bg-gradient-to-r from-slate-900 to-slate-800 p-2 gap-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`anime-tab flex items-center gap-2 ${
              activeTab === tab.id ? 'active' : ''
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-sm p-8 min-h-[500px] animate-tab-open">
        {activeTabContent}
      </div>
    </div>
  );
};

export default TabNavigation;
