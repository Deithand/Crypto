import React from 'react';
import { Section } from '../types';
import { 
  BookOpen, 
  Home, 
  UserPlus, 
  Wallet, 
  LayoutDashboard, 
  TrendingUp, 
  ShieldAlert,
  Crown,
  EyeOff,
  LineChart,
  Calculator,
  Brain,
  Wrench,
  X
} from 'lucide-react';

interface SidebarProps {
  sections: Section[];
  activeChapterId: string;
  onSelectChapter: (chapterId: string) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  onGoHome: () => void;
}

const getIconForId = (id: string) => {
  const map: Record<string, React.ElementType> = {
    'intro': BookOpen,
    'registration': UserPlus,
    'deposit': Wallet,
    'interface': LayoutDashboard,
    'trading': TrendingUp,
    'risk': ShieldAlert,
    'hidden': EyeOff,
    'ta': LineChart,
    'math': Calculator,
    'psycho': Brain,
    'tools': Wrench,
    'basics': BookOpen,
    'pro': Crown
  };
  return map[id] || BookOpen;
};

const Sidebar: React.FC<SidebarProps> = ({ sections, activeChapterId, onSelectChapter, isOpen, setIsOpen, onGoHome }) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-40 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Content */}
      <aside className={`
        fixed top-0 left-0 z-50 h-screen w-72 bg-[#161617]/90 backdrop-blur-xl border-r border-white/5 flex flex-col transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1)
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Header */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-white/5">
          <div className="font-semibold tracking-tight text-sm text-gray-200 cursor-pointer" onClick={onGoHome}>
            CryptoPro
          </div>
          <button onClick={() => setIsOpen(false)} className="lg:hidden text-gray-400 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-3 space-y-8">
          
          <button 
            onClick={onGoHome}
            className="w-full flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all text-sm font-medium duration-200"
          >
            <Home size={18} />
            <span>Home</span>
          </button>

          {sections.map((section) => (
            <div key={section.id}>
              <h3 className="px-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-2">
                {section.title}
              </h3>
              
              <ul className="space-y-1">
                {section.chapters.map((chapter) => {
                  const isActive = activeChapterId === chapter.id;
                  const Icon = getIconForId(chapter.id);
                  
                  return (
                    <li key={chapter.id}>
                      <button
                        onClick={() => {
                          onSelectChapter(chapter.id);
                          if (window.innerWidth < 1024) setIsOpen(false);
                        }}
                        className={`
                          w-full text-left px-3 py-2 text-[13px] transition-all rounded-lg flex items-center gap-3
                          ${isActive 
                            ? 'bg-[#0071e3] text-white font-medium shadow-lg shadow-blue-500/20' 
                            : 'text-gray-400 hover:text-white hover:bg-white/5'}
                        `}
                      >
                        <Icon size={16} className={isActive ? 'text-white' : 'text-gray-500'} />
                        <span>{chapter.title}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;