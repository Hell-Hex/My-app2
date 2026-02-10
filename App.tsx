
import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Globe, 
  Package, 
  ShoppingCart, 
  Truck, 
  BookOpen, 
  Activity, 
  Settings, 
  Search,
  MessageSquare,
  AlertCircle,
  Menu,
  X,
  ChevronRight,
  ShieldAlert
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

import Dashboard from './components/Dashboard';
import SiteBuilder from './components/SiteBuilder';
import ProductManagement from './components/ProductManagement';
import OrderCenter from './components/OrderCenter';
import SupplierIntegrations from './components/SupplierIntegrations';
import LearningCenter from './components/LearningCenter';
import AIAssistant from './components/AIAssistant';
import DebugLogs from './components/DebugLogs';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isAIExpanded, setIsAIExpanded] = useState(false);

  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'builder', icon: Globe, label: 'Website Builder' },
    { id: 'products', icon: Package, label: 'Products & SKUs' },
    { id: 'orders', icon: ShoppingCart, label: 'Order Center' },
    { id: 'suppliers', icon: Truck, label: 'Suppliers' },
    { id: 'learn', icon: BookOpen, label: 'Learning Center' },
    { id: 'debug', icon: Activity, label: 'Activity Logs' },
  ];

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden text-slate-900">
      {/* Sidebar */}
      <aside className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-white border-r border-slate-200 transition-all duration-300 flex flex-col z-50`}>
        <div className="p-6 flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-lg">
            <ShieldAlert className="w-6 h-6 text-white" />
          </div>
          {isSidebarOpen && <span className="font-bold text-xl tracking-tight">OmniCommerce</span>}
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all ${
                activeTab === item.id 
                  ? 'bg-blue-50 text-blue-600 shadow-sm' 
                  : 'text-slate-500 hover:bg-slate-50'
              }`}
            >
              <item.icon className="w-5 h-5" />
              {isSidebarOpen && <span className="font-medium">{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-100">
          <button className="flex items-center gap-3 p-3 text-slate-500 hover:bg-slate-50 rounded-xl w-full">
            <Settings className="w-5 h-5" />
            {isSidebarOpen && <span className="font-medium">Settings</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 z-40">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-slate-50 rounded-lg">
              <Menu className="w-5 h-5 text-slate-500" />
            </button>
            <h1 className="text-lg font-semibold capitalize">{activeTab.replace('-', ' ')}</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative group hidden md:block">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search products, orders..." 
                className="pl-10 pr-4 py-2 bg-slate-100 border-none rounded-full text-sm w-64 focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-700 border border-green-100 rounded-full text-xs font-medium">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              System Live
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8 relative">
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'builder' && <SiteBuilder />}
          {activeTab === 'products' && <ProductManagement />}
          {activeTab === 'orders' && <OrderCenter />}
          {activeTab === 'suppliers' && <SupplierIntegrations />}
          {activeTab === 'learn' && <LearningCenter />}
          {activeTab === 'debug' && <DebugLogs />}
        </div>
      </main>

      {/* Floating AI Assistant Toggle */}
      <AIAssistant />
    </div>
  );
};

export default App;
