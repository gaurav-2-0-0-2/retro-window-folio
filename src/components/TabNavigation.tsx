
import React, { useState } from 'react';
import { User, Mail, Home, Monitor } from 'lucide-react';

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
      <div className="flex border-b-2 border-retro-border bg-retro-gray">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`retro-tab flex items-center gap-2 ${
              activeTab === tab.id ? 'active' : ''
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-retro-window p-6 min-h-[400px] animate-tab-open">
        {activeTabContent}
      </div>
    </div>
  );
};

export default TabNavigation;
