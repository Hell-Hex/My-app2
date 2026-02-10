
import React from 'react';
import { Play, Book, CheckCircle2, Star, Clock, Trophy } from 'lucide-react';

const LearningCenter: React.FC = () => {
  const courses = [
    {
      title: 'Commerce Foundations',
      level: 'Beginner',
      duration: '45 mins',
      progress: 100,
      lessons: 8,
      icon: Book,
      color: 'bg-green-500'
    },
    {
      title: 'Dropshipping Masterclass',
      level: 'Intermediate',
      duration: '2.5 hours',
      progress: 45,
      lessons: 12,
      icon: Trophy,
      color: 'bg-blue-500'
    },
    {
      title: 'Advanced Marketplace SEO',
      level: 'Expert',
      duration: '1.2 hours',
      progress: 0,
      lessons: 6,
      icon: Star,
      color: 'bg-purple-500'
    }
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="bg-gradient-to-r from-indigo-600 to-blue-700 rounded-3xl p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl overflow-hidden relative">
        <div className="relative z-10">
          <h2 className="text-3xl font-extrabold mb-4">Level Up Your Business</h2>
          <p className="text-indigo-100 text-lg mb-8 max-w-xl">
            Learn how to automate fulfillment, scale your marketplace, and master supplier integration through our curated learning paths.
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-indigo-50 transition-all shadow-md">
              <Play className="w-4 h-4 fill-current" /> Continue Learning
            </button>
            <div className="flex items-center gap-2 text-indigo-100 font-medium">
              <Trophy className="w-5 h-5 text-amber-400" />
              <span>3/5 Paths Completed</span>
            </div>
          </div>
        </div>
        <div className="hidden md:block absolute -right-10 -bottom-10 opacity-10">
          <Book className="w-80 h-80" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.title} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col group hover:border-blue-400 transition-all">
            <div className="flex items-center justify-between mb-6">
              <div className={`${course.color} p-3 rounded-2xl text-white shadow-lg`}>
                <course.icon className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-100 rounded-full text-[10px] font-bold text-slate-500 uppercase">
                <Clock className="w-3 h-3" /> {course.duration}
              </div>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{course.title}</h3>
            <p className="text-slate-400 text-sm mb-6 font-medium">{course.level} • {course.lessons} Modules</p>

            <div className="mt-auto space-y-4">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-slate-500">Progress</span>
                <span className="text-slate-900">{course.progress}%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className={`h-full ${course.color} transition-all duration-1000`} style={{width: `${course.progress}%`}}></div>
              </div>
              <button className={`w-full py-3 rounded-xl font-bold text-sm transition-all ${
                course.progress === 100 
                  ? 'bg-slate-50 text-slate-400 cursor-default flex items-center justify-center gap-2' 
                  : 'bg-slate-900 text-white hover:bg-slate-800'
              }`}>
                {course.progress === 100 ? (
                  <><CheckCircle2 className="w-4 h-4 text-green-500" /> Completed</>
                ) : (
                  course.progress > 0 ? 'Resume Module' : 'Start Path'
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningCenter;
