
import React, { useState } from 'react';
import { Search, Filter, Plus, ArrowUpDown, Tag, ExternalLink, RefreshCw, Layers } from 'lucide-react';
import { Product } from '../types';

const ProductManagement: React.FC = () => {
  const [products] = useState<Product[]>([
    {
      id: '1',
      name: 'UltraWide Curved Monitor',
      sku: 'DISP-001',
      supplierSku: 'ALI-998273',
      price: 299.99,
      markup: 1.5,
      stock: 42,
      category: 'Electronics',
      supplierId: 'AliExpress',
      image: 'https://picsum.photos/seed/mon/200/200'
    },
    {
      id: '2',
      name: 'Ergonomic Mesh Chair',
      sku: 'FURN-042',
      supplierSku: 'TM-X928',
      price: 189.50,
      markup: 1.3,
      stock: 12,
      category: 'Furniture',
      supplierId: 'Temu',
      image: 'https://picsum.photos/seed/chair/200/200'
    }
  ]);

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Inventory & SKU Mapping</h2>
          <p className="text-slate-500 text-sm">Orchestrate your native and supplier products in one place.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-all text-sm font-medium flex items-center gap-2">
            <RefreshCw className="w-4 h-4" /> Sync Supplier Data
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all text-sm font-medium flex items-center gap-2 shadow-md">
            <Plus className="w-4 h-4" /> Add Product
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex flex-col md:flex-row md:items-center gap-4">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Filter by SKU, Supplier or Name..." 
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <div className="flex gap-2">
            <button className="p-2 bg-slate-50 border border-slate-100 rounded-lg text-slate-500 hover:text-blue-600">
              <Filter className="w-4 h-4" />
            </button>
            <button className="p-2 bg-slate-50 border border-slate-100 rounded-lg text-slate-500 hover:text-blue-600">
              <ArrowUpDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-xs font-bold uppercase tracking-wider">
                <th className="px-6 py-4">Product</th>
                <th className="px-6 py-4">Internal SKU / Supplier SKU</th>
                <th className="px-6 py-4">Mapping Status</th>
                <th className="px-6 py-4">Pricing (Markup)</th>
                <th className="px-6 py-4">Stock</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {products.map(product => (
                <tr key={product.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={product.image} className="w-10 h-10 rounded-lg object-cover border border-slate-200" alt="" />
                      <div>
                        <div className="font-bold text-slate-900 text-sm">{product.name}</div>
                        <div className="text-slate-500 text-xs">{product.category}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-slate-900 font-medium text-sm">{product.sku}</span>
                      <span className="text-slate-400 text-xs">{product.supplierSku} ({product.supplierId})</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-green-50 text-green-700 border border-green-100 rounded-full text-[10px] font-bold uppercase">
                      <Layers className="w-3 h-3" /> Linked
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-bold text-slate-900">${(product.price * product.markup).toFixed(2)}</div>
                    <div className="text-xs text-slate-500">Cost: ${product.price.toFixed(2)} ({product.markup}x)</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-slate-700">{product.stock} units</div>
                    <div className="w-20 bg-slate-100 h-1.5 rounded-full mt-1">
                      <div className="bg-blue-500 h-1.5 rounded-full" style={{width: `${Math.min(product.stock, 100)}%`}}></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;
