import React, { useState } from 'react';
// Added missing Package and Settings imports from lucide-react
import { Plus, Layout, Type, Image as ImageIcon, Box, Trash2, Eye, Save, MoveVertical, Globe, Smartphone, Monitor, Package, Settings } from 'lucide-react';

interface Section {
  id: string;
  type: 'hero' | 'products' | 'text' | 'footer';
  content: any;
}

const SiteBuilder: React.FC = () => {
  const [sections, setSections] = useState<Section[]>([
    { id: '1', type: 'hero', content: { title: 'Welcome to our Store', subtitle: 'Discover premium goods' } },
    { id: '2', type: 'products', content: { title: 'Featured Products', limit: 4 } }
  ]);
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');

  const addSection = (type: Section['type']) => {
    const newSection: Section = {
      id: Math.random().toString(36).substr(2, 9),
      type,
      content: {}
    };
    setSections([...sections, newSection]);
  };

  const removeSection = (id: string) => {
    setSections(sections.filter(s => s.id !== id));
  };

  return (
    <div className="flex h-full gap-6 max-w-[1600px] mx-auto">
      {/* Sidebar Controls */}
      <div className="w-80 flex flex-col gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Layout className="w-4 h-4 text-blue-600" />
            Page Structure
          </h3>
          <div className="space-y-3">
            {sections.map((section, index) => (
              <div key={section.id} className="group flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 transition-all cursor-move">
                <div className="flex items-center gap-3">
                  <MoveVertical className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="text-sm font-medium capitalize text-slate-700">{section.type} Section</span>
                </div>
                <button onClick={() => removeSection(section.id)} className="p-1 text-slate-400 hover:text-red-500 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 p-3 border-2 border-dashed border-slate-200 text-slate-400 rounded-xl hover:border-blue-400 hover:text-blue-500 transition-all text-sm font-medium flex items-center justify-center gap-2">
            <Plus className="w-4 h-4" /> Add Custom Component
          </button>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-900 mb-4">Quick Add</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: Type, label: 'Hero', type: 'hero' },
              { icon: Box, label: 'Products', type: 'products' },
              { icon: ImageIcon, label: 'Banner', type: 'text' },
              { icon: Layout, label: 'Footer', type: 'footer' }
            ].map((item) => (
              <button 
                key={item.label}
                onClick={() => addSection(item.type as any)}
                className="flex flex-col items-center gap-2 p-4 bg-slate-50 hover:bg-blue-50 rounded-xl border border-slate-100 hover:border-blue-100 transition-all"
              >
                <item.icon className="w-5 h-5 text-blue-600" />
                <span className="text-xs font-medium text-slate-600">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Canvas Area */}
      <div className="flex-1 flex flex-col gap-6">
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-lg">
            <button 
              onClick={() => setViewMode('desktop')}
              className={`p-2 rounded-md transition-all ${viewMode === 'desktop' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500'}`}
            >
              <Monitor className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setViewMode('mobile')}
              className={`p-2 rounded-md transition-all ${viewMode === 'mobile' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500'}`}
            >
              <Smartphone className="w-4 h-4" />
            </button>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-xs text-slate-400 font-medium px-3 py-1 bg-slate-50 rounded-full border border-slate-100">
              Auto-saved 2 mins ago
            </div>
            <button className="p-2.5 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-all flex items-center gap-2 text-sm font-medium">
              <Eye className="w-4 h-4" /> Preview
            </button>
            <button className="p-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all flex items-center gap-2 text-sm font-medium shadow-md">
              <Save className="w-4 h-4" /> Publish Store
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto bg-slate-200 rounded-2xl border-4 border-slate-200 shadow-inner flex justify-center">
          <div className={`${viewMode === 'desktop' ? 'w-full max-w-5xl' : 'w-[375px]'} transition-all duration-500 h-fit bg-white shadow-2xl overflow-hidden`}>
            {sections.map(section => (
              <div key={section.id} className="relative group border-y border-transparent hover:border-blue-400">
                {section.type === 'hero' && (
                  <div className="py-20 px-12 bg-gradient-to-br from-blue-600 to-indigo-700 text-center text-white">
                    <h1 className="text-4xl font-extrabold mb-4">{section.content.title || 'Your Story Starts Here'}</h1>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">{section.content.subtitle || 'Build the marketplace of the future today.'}</p>
                    <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold shadow-lg">Shop Now</button>
                  </div>
                )}
                {section.type === 'products' && (
                  <div className="py-16 px-12">
                    <h2 className="text-2xl font-bold mb-8 text-center">{section.content.title}</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {[1,2,3,4].map(i => (
                        <div key={i} className="aspect-square bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center text-slate-300">
                          {/* Added missing Package icon */}
                          <Package className="w-8 h-8" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                  <button className="bg-white p-2 rounded-lg shadow-md border border-slate-100 text-slate-600 hover:text-blue-600">
                    {/* Added missing Settings icon */}
                    <Settings className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteBuilder;