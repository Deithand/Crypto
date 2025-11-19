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
          <h2 key={index} className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6 tracking-tight">
            {block.content}
          </h2>
        );
      case BlockType.PARAGRAPH:
        return (
          <p key={index} className="text-zinc-400 leading-7 mb-6 text-base md:text-lg">
            {block.content}
          </p>
        );
      case BlockType.LIST:
        const ListTag = block.listType === 'ol' ? 'ol' : 'ul';
        return (
          <ListTag key={index} className={`mb-8 pl-6 space-y-2 text-zinc-300 ${block.listType === 'ol' ? 'list-decimal' : 'list-disc'}`}>
            {(block.content as string[]).map((item, i) => (
              <li key={i} className="pl-2 leading-7">
                 <span>{item}</span>
              </li>
            ))}
          </ListTag>
        );
      case BlockType.CALLOUT:
        const variants = {
          info: { bg: 'bg-zinc-900', border: 'border-zinc-800', icon: Info, color: 'text-zinc-400' },
          warning: { bg: 'bg-orange-950/20', border: 'border-orange-900/30', icon: AlertTriangle, color: 'text-orange-500' },
          tip: { bg: 'bg-emerald-950/20', border: 'border-emerald-900/30', icon: CheckCircle, color: 'text-emerald-500' },
          danger: { bg: 'bg-red-950/20', border: 'border-red-900/30', icon: Flame, color: 'text-red-500' },
        };
        const style = variants[block.variant as keyof typeof variants] || variants.info;
        const Icon = style.icon;
        
        return (
          <div key={index} className={`p-6 mb-8 rounded-lg border ${style.border} ${style.bg} flex gap-4`}>
            <div className={`mt-1 ${style.color}`}>
               <Icon size={20} />
            </div>
            <div className="flex-1">
              <div className="text-zinc-200 text-sm leading-relaxed">
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
    <div className="max-w-4xl mx-auto pb-32 pt-12 px-6 lg:px-12 bg-black min-h-screen">
      <header className="mb-12 pb-6 border-b border-white/10">
        <div className="text-xs font-medium text-zinc-500 mb-4 uppercase tracking-wider">
           Manual / {chapter.id}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          {chapter.title}
        </h1>
      </header>

      <div className="prose prose-invert prose-zinc max-w-none">
        {chapter.content.map((block, index) => renderBlock(block, index))}
      </div>

      <div className="mt-20 pt-8 border-t border-white/10 flex justify-between items-center">
        <button 
          onClick={onPrev}
          disabled={!hasPrev}
          className={`
            flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors
            ${!hasPrev ? 'opacity-0 pointer-events-none' : ''}
          `}
        >
          <ChevronLeft size={16} />
          <span>Назад</span>
        </button>
        <button 
          onClick={onNext}
          disabled={!hasNext}
          className={`
             flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors
            ${!hasNext ? 'opacity-0 pointer-events-none' : ''}
          `}
        >
          <span>Далее</span>
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default ContentRenderer;