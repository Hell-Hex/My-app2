
import React from 'react';
import { Clock, CheckCircle2, AlertCircle, ShoppingBag, Truck, CreditCard, ChevronRight, User } from 'lucide-react';

const OrderCenter: React.FC = () => {
  const orders = [
    {
      id: 'ORD-2024-001',
      customer: 'Alex Johnson',
      total: 342.99,
      status: 'PREPARING',
      supplier: 'AliExpress',
      date: '2 mins ago',
      items: 2
    },
    {
      id: 'ORD-2024-002',
      customer: 'Sarah Smith',
      total: 129.50,
      status: 'PENDING',
      supplier: 'Temu',
      date: '1 hour ago',
      items: 1
    },
    {
      id: 'ORD-2024-003',
      customer: 'Michael Brown',
      total: 89.00,
      status: 'SHIPPED',
      supplier: 'CJ Dropshipping',
      date: '5 hours ago',
      items: 3
    }
  ];

  const getStatusStyle = (status: string) => {
    switch(status) {
      case 'PENDING': return 'bg-amber-50 text-amber-700 border-amber-100';
      case 'PREPARING': return 'bg-blue-50 text-blue-700 border-blue-100';
      case 'SHIPPED': return 'bg-green-50 text-green-700 border-green-100';
      default: return 'bg-slate-50 text-slate-700 border-slate-100';
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Order Center</h2>
          <p className="text-slate-500 text-sm">Review and fulfill orders with Assisted Dropshipping.</p>
        </div>
        <div className="flex gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-bold border border-blue-100">
            <Clock className="w-3.5 h-3.5" /> 12 Pending Action
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Order List */}
        <div className="lg:col-span-3 space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-blue-300 transition-all p-6 cursor-pointer group">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-slate-100 p-2.5 rounded-xl group-hover:bg-blue-50 transition-colors">
                    <ShoppingBag className="w-5 h-5 text-slate-600 group-hover:text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{order.id}</h3>
                    <p className="text-slate-400 text-xs">{order.date} • {order.items} items</p>
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-[10px] font-bold border uppercase tracking-wider ${getStatusStyle(order.status)}`}>
                  {order.status}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-50">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-50 rounded-lg"><User className="w-4 h-4 text-slate-400" /></div>
                  <div className="text-sm">
                    <p className="text-slate-400 text-xs mb-0.5">Customer</p>
                    <p className="font-medium text-slate-900">{order.customer}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-50 rounded-lg"><CreditCard className="w-4 h-4 text-slate-400" /></div>
                  <div className="text-sm">
                    <p className="text-slate-400 text-xs mb-0.5">Total Revenue</p>
                    <p className="font-medium text-slate-900">${order.total.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-50 rounded-lg"><Truck className="w-4 h-4 text-slate-400" /></div>
                  <div className="text-sm">
                    <p className="text-slate-400 text-xs mb-0.5">Supplier Integration</p>
                    <p className="font-medium text-slate-900">{order.supplier}</p>
                  </div>
                </div>
              </div>

              {order.status === 'PREPARING' && (
                <div className="mt-6 flex gap-3">
                  <button className="flex-1 bg-blue-600 text-white py-2.5 rounded-xl text-sm font-bold shadow-md hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
                    Launch Assisted Fulfillment <ChevronRight className="w-4 h-4" />
                  </button>
                  <button className="px-4 py-2.5 bg-slate-100 text-slate-600 rounded-xl text-sm font-bold hover:bg-slate-200 transition-all">
                    Manual Override
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Status Breakdown Sidebar */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-6">Fulfillment Queue</h3>
            <div className="space-y-4">
              {[
                { label: 'Unfulfilled', count: 12, color: 'bg-amber-500' },
                { label: 'Confirmed', count: 48, color: 'bg-blue-500' },
                { label: 'Shipped', count: 124, color: 'bg-green-500' },
                { label: 'Flagged', count: 2, color: 'bg-red-500' },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${item.color}`}></div>
                    <span className="text-sm font-medium text-slate-600 group-hover:text-blue-600">{item.label}</span>
                  </div>
                  <span className="text-sm font-bold text-slate-900">{item.count}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-indigo-600 p-6 rounded-2xl shadow-lg text-white">
            <div className="bg-indigo-500 w-fit p-2 rounded-lg mb-4">
              <AlertCircle className="w-5 h-5 text-indigo-100" />
            </div>
            <h4 className="font-bold text-lg mb-2">Did you know?</h4>
            <p className="text-indigo-100 text-sm mb-4 leading-relaxed">
              Assisted Fulfillment pre-fills checkout data on the supplier site, reducing human error by up to 90%.
            </p>
            <button className="w-full py-2 bg-white text-indigo-600 rounded-xl text-xs font-bold hover:bg-indigo-50 transition-all">
              Learn How It Works
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCenter;
