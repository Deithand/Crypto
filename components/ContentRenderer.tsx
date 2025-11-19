import React from 'react';
import { Chapter, BlockType } from '../types';
import { 
  AlertTriangle, 
  Info, 
  CheckCircle, 
  Flame,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface ContentRendererProps {
  chapter: Chapter;
  onNext: () => void;
  onPrev: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

const ContentRenderer: React.FC<ContentRendererProps> = ({ chapter, onNext, onPrev, hasPrev, hasNext }) => {
  
  const renderBlock = (block: any, index: number) => {
    switch (block.type) {
      case BlockType.HEADING:
        return (
          <h2 key={index} className="text-3xl font-semibold text-white mt-16 mb-6 tracking-tight leading-tight">
            {block.content}
          </h2>
        );
      case BlockType.PARAGRAPH:
        return (
          <p key={index} className="text-gray-300 leading-8 mb-6 text-[17px] font-normal tracking-wide">
            {block.content}
          </p>
        );
      case BlockType.LIST:
        const ListTag = block.listType === 'ol' ? 'ol' : 'ul';
        return (
          <ListTag key={index} className={`mb-8 pl-6 space-y-3 text-gray-300 ${block.listType === 'ol' ? 'list-decimal' : 'list-disc'}`}>
            {(block.content as string[]).map((item, i) => (
              <li key={i} className="pl-2 leading-8 text-[17px]">
                 <span>{item}</span>
              </li>
            ))}
          </ListTag>
        );
      case BlockType.CALLOUT:
        const variants = {
          info: { bg: 'bg-[#1c1c1e]', border: 'border-gray-800', icon: Info, color: 'text-blue-500' },
          warning: { bg: 'bg-[#1c1c1e]', border: 'border-orange-900/30', icon: AlertTriangle, color: 'text-orange-500' },
          tip: { bg: 'bg-[#1c1c1e]', border: 'border-emerald-900/30', icon: CheckCircle, color: 'text-emerald-500' },
          danger: { bg: 'bg-[#1c1c1e]', border: 'border-red-900/30', icon: Flame, color: 'text-red-500' },
        };
        const style = variants[block.variant as keyof typeof variants] || variants.info;
        const Icon = style.icon;
        
        return (
          <div key={index} className={`p-6 mb-8 rounded-2xl border ${style.border} ${style.bg} flex gap-5`}>
            <div className={`mt-1 ${style.color}`}>
               <Icon size={22} />
            </div>
            <div className="flex-1">
              <div className="text-gray-200 text-[15px] leading-7">
                {block.content}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-[800px] mx-auto pb-40 pt-20 px-6 lg:px-0 min-h-screen">
      <header className="mb-16 pb-8 border-b border-white/5">
        <div className="text-xs font-semibold text-[#2997ff] mb-4 uppercase tracking-widest">
           Guide / {chapter.id}
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tighter leading-[1.1]">
          {chapter.title}
        </h1>
      </header>

      <div className="prose prose-invert prose-lg max-w-none">
        {chapter.content.map((block, index) => renderBlock(block, index))}
      </div>

      <div className="mt-24 pt-10 border-t border-white/5 flex justify-between items-center">
        <button 
          onClick={onPrev}
          disabled={!hasPrev}
          className={`
            flex items-center gap-2 px-5 py-3 text-sm font-medium text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/5
            ${!hasPrev ? 'opacity-0 pointer-events-none' : ''}
          `}
        >
          <ChevronLeft size={18} />
          <span>Previous</span>
        </button>
        <button 
          onClick={onNext}
          disabled={!hasNext}
          className={`
             flex items-center gap-2 px-8 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition-colors shadow-lg
            ${!hasNext ? 'opacity-0 pointer-events-none' : ''}
          `}
        >
          <span>Next Chapter</span>
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default ContentRenderer;