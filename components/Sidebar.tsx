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
          className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Content */}
      <aside className={`
        fixed top-0 left-0 z-50 h-screen w-72 bg-black border-r border-white/10 flex flex-col transition-transform duration-300 ease-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Header */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-white/10">
          <div className="font-bold tracking-tight text-sm cursor-pointer hover:text-zinc-300 transition-colors" onClick={onGoHome}>
            CRYPTO.GUIDE
          </div>
          <button onClick={() => setIsOpen(false)} className="lg:hidden text-zinc-500 hover:text-white">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-8">
          
          <button 
            onClick={onGoHome}
            className="w-full flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-md transition-all text-sm font-medium"
          >
            <Home size={18} />
            <span>Главная</span>
          </button>

          {sections.map((section) => (
            <div key={section.id}>
              <h3 className="px-3 text-[10px] font-semibold text-zinc-500 uppercase tracking-wider mb-2">
                {section.title}
              </h3>
              
              <ul className="space-y-0.5">
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
                          w-full text-left px-3 py-2 text-sm transition-all rounded-md flex items-center gap-3
                          ${isActive 
                            ? 'bg-white text-black font-medium' 
                            : 'text-zinc-400 hover:text-white hover:bg-white/5'}
                        `}
                      >
                        <Icon size={16} className={isActive ? 'text-black' : 'text-zinc-500'} />
                        <span>{chapter.title}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="p-4 border-t border-white/10">
           <div className="text-[10px] text-zinc-600 text-center">
             v2.0 • Updated 2024
           </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;