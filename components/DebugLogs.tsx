
import React from 'react';
import { Terminal, Bug, Cpu, HardDrive, Download, Trash2, Search } from 'lucide-react';

const DebugLogs: React.FC = () => {
  const logs = [
    { timestamp: '2024-03-10 14:22:10', type: 'SUCCESS', component: 'Automation', message: 'Assisted pre-fill successful for order ORD-001.' },
    { timestamp: '2024-03-10 14:20:05', type: 'WARNING', component: 'Sync', message: 'Price discrepancy detected on Temu (SKU: X928). Auto-markup applied.' },
    { timestamp: '2024-03-10 14:18:42', type: 'ERROR', component: 'Supplier', message: 'Connection timeout with AliExpress API. Retrying in 30s...' },
    { timestamp: '2024-03-10 14:15:22', type: 'INFO', component: 'Builder', message: 'Store theme "Neon-Dark" published to production.' },
  ];

  const getTypeStyles = (type: string) => {
    switch(type) {
      case 'SUCCESS': return 'text-green-600 bg-green-50';
      case 'ERROR': return 'text-red-600 bg-red-50';
      case 'WARNING': return 'text-amber-600 bg-amber-50';
      default: return 'text-slate-600 bg-slate-50';
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">System Diagnostics</h2>
          <p className="text-slate-500 text-sm">Real-time activity logs and automation debugging.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-slate-200">
            <Download className="w-4 h-4" /> Export JSON
          </button>
          <button className="px-4 py-2 bg-slate-900 text-white rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-slate-800 shadow-md">
            <Trash2 className="w-4 h-4" /> Clear Console
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="bg-blue-50 p-3 rounded-xl"><Cpu className="w-6 h-6 text-blue-600" /></div>
          <div>
            <p className="text-slate-500 text-xs font-bold uppercase mb-0.5">CPU Load</p>
            <p className="text-xl font-bold">12%</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="bg-purple-50 p-3 rounded-xl"><HardDrive className="w-6 h-6 text-purple-600" /></div>
          <div>
            <p className="text-slate-500 text-xs font-bold uppercase mb-0.5">Storage Usage</p>
            <p className="text-xl font-bold">1.4 GB / 10 GB</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="bg-red-50 p-3 rounded-xl"><Bug className="w-6 h-6 text-red-600" /></div>
          <div>
            <p className="text-slate-500 text-xs font-bold uppercase mb-0.5">Resolved Errors</p>
            <p className="text-xl font-bold">412 Today</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-800">
        <div className="p-4 bg-slate-800/50 border-b border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-slate-400" />
            <span className="text-slate-300 font-mono text-sm">omnidash@system:~$ logs --follow</span>
          </div>
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input type="text" placeholder="Grep logs..." className="bg-slate-900 border border-slate-700 rounded-lg text-[10px] pl-9 pr-3 py-1.5 text-slate-300 outline-none focus:border-blue-500" />
          </div>
        </div>
        <div className="p-6 font-mono text-sm space-y-3 h-[400px] overflow-y-auto">
          {logs.map((log, i) => (
            <div key={i} className="flex gap-4 group">
              <span className="text-slate-500 shrink-0">{log.timestamp}</span>
              <span className={`px-2 py-0.5 rounded text-[10px] font-bold h-fit shrink-0 ${getTypeStyles(log.type)}`}>{log.type}</span>
              <span className="text-blue-400 shrink-0">[{log.component}]</span>
              <span className="text-slate-300 group-hover:text-white transition-colors">{log.message}</span>
            </div>
          ))}
          <div className="flex gap-2 text-slate-500 animate-pulse">
            <span>_</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DebugLogs;
