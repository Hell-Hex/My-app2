
import React from 'react';
import { Truck, ShieldCheck, AlertTriangle, Zap, ExternalLink, Settings2, Power } from 'lucide-react';
import { SupplierStatus, AutomationLevel } from '../types';

const SupplierIntegrations: React.FC = () => {
  const suppliers = [
    {
      id: 'ali-1',
      name: 'AliExpress Global',
      status: SupplierStatus.HEALTHY,
      health: 98,
      automation: AutomationLevel.ASSISTED,
      orders: 1450,
      lastAction: 'Inventory sync 4m ago'
    },
    {
      id: 'temu-1',
      name: 'Temu Merchant Network',
      status: SupplierStatus.WARNING,
      health: 65,
      automation: AutomationLevel.MANUAL,
      orders: 89,
      lastAction: 'Captcha detected 12h ago'
    },
    {
      id: 'cj-1',
      name: 'CJ Dropshipping',
      status: SupplierStatus.HEALTHY,
      health: 92,
      automation: AutomationLevel.SEMI_AUTOMATED,
      orders: 412,
      lastAction: 'Price adjustment successful'
    }
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Supplier Network</h2>
          <p className="text-slate-500 text-sm">Manage connections and mitigate cross-platform risks.</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all text-sm font-medium flex items-center gap-2 shadow-md">
          <Zap className="w-4 h-4" /> Add Supplier
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {suppliers.map(s => (
          <div key={s.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 overflow-hidden relative group">
            <div className={`absolute top-0 right-0 w-1.5 h-full ${s.status === SupplierStatus.HEALTHY ? 'bg-green-500' : 'bg-amber-500'}`}></div>
            
            <div className="flex items-center justify-between mb-6">
              <div className="bg-slate-50 p-3 rounded-2xl group-hover:bg-blue-50 transition-colors">
                <Truck className="w-6 h-6 text-slate-700 group-hover:text-blue-600" />
              </div>
              <div className="flex gap-1.5">
                <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"><Settings2 className="w-4 h-4" /></button>
                <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"><Power className="w-4 h-4" /></button>
              </div>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-1">{s.name}</h3>
            <p className="text-slate-400 text-xs mb-4">{s.lastAction}</p>

            <div className="space-y-4 pt-4 border-t border-slate-50">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500">Health Score</span>
                <span className={`text-xs font-bold ${s.health > 80 ? 'text-green-600' : 'text-amber-600'}`}>{s.health}/100</span>
              </div>
              <div className="w-full bg-slate-100 h-1.5 rounded-full">
                <div className={`h-1.5 rounded-full ${s.health > 80 ? 'bg-green-500' : 'bg-amber-500'}`} style={{width: `${s.health}%`}}></div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-slate-50 p-3 rounded-xl">
                  <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Automation</p>
                  <p className="text-xs font-bold text-slate-700">{s.automation}</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl">
                  <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Total Orders</p>
                  <p className="text-xs font-bold text-slate-700">{s.orders}</p>
                </div>
              </div>
            </div>

            <button className="w-full mt-6 py-2.5 border border-slate-200 text-slate-600 rounded-xl text-xs font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
              <ExternalLink className="w-3.5 h-3.5" /> View Portal Credentials
            </button>
          </div>
        ))}

        {/* Risk Banner */}
        <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
          <div className="bg-amber-100 p-3 rounded-full mb-4">
            <AlertTriangle className="w-8 h-8 text-amber-600" />
          </div>
          <h3 className="text-amber-900 font-bold mb-2">Automation Safety Active</h3>
          <p className="text-amber-700 text-sm mb-4 leading-relaxed">
            All bots are currently simulating human mouse movements to prevent account flagging.
          </p>
          <button className="text-amber-600 text-xs font-bold hover:underline">Configure Behavior</button>
        </div>
      </div>
    </div>
  );
};

export default SupplierIntegrations;
