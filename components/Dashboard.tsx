
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { TrendingUp, Users, ShoppingCart, DollarSign, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const data = [
  { name: 'Mon', sales: 4000, orders: 24 },
  { name: 'Tue', sales: 3000, orders: 18 },
  { name: 'Wed', sales: 2000, orders: 12 },
  { name: 'Thu', sales: 2780, orders: 20 },
  { name: 'Fri', sales: 1890, orders: 15 },
  { name: 'Sat', sales: 2390, orders: 22 },
  { name: 'Sun', sales: 3490, orders: 28 },
];

const StatCard = ({ title, value, change, isPositive, icon: Icon }: any) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
    <div className="flex items-center justify-between mb-4">
      <div className="bg-slate-100 p-2 rounded-xl">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <div className={`flex items-center gap-1 text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
        {isPositive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
        {change}%
      </div>
    </div>
    <h3 className="text-slate-500 text-sm font-medium mb-1">{title}</h3>
    <p className="text-2xl font-bold text-slate-900">{value}</p>
  </div>
);

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Sales" value="$42,394" change="12.5" isPositive={true} icon={DollarSign} />
        <StatCard title="Total Orders" value="1,284" change="8.2" isPositive={true} icon={ShoppingCart} />
        <StatCard title="Store Visitors" value="48,209" change="2.4" isPositive={false} icon={Users} />
        <StatCard title="Profit Margin" value="34.2%" change="4.1" isPositive={true} icon={TrendingUp} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold mb-6">Revenue Overview</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}}
                />
                <Area type="monotone" dataKey="sales" stroke="#2563eb" strokeWidth={3} fillOpacity={1} fill="url(#colorSales)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold mb-6">Fulfillment Health</h3>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-slate-500 text-sm">Assisted Orders Success</span>
              <span className="font-bold text-green-600">98.4%</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full w-[98.4%]"></div>
            </div>
            
            <div className="flex items-center justify-between mt-4">
              <span className="text-slate-500 text-sm">Automation Failures</span>
              <span className="font-bold text-red-600">1.2%</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2">
              <div className="bg-red-500 h-2 rounded-full w-[1.2%]"></div>
            </div>

            <div className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded-xl">
              <div className="flex gap-3">
                <div className="bg-blue-600 p-2 rounded-lg h-fit">
                  <DollarSign className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-blue-900 font-bold text-sm">Next Payout</h4>
                  <p className="text-blue-700 text-xs">Estimated $4,200 on March 15th</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
