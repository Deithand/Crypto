import React, { useState, useMemo, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import ContentRenderer from './components/ContentRenderer';
import AiAssistant from './components/AiAssistant';
import Landing from './components/Landing';
import { GUIDE_CONTENT } from './constants';
import { Menu } from 'lucide-react';
import Lenis from 'lenis';

const App: React.FC = () => {
  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Flattened chapters for easier navigation index
  const allChapters = useMemo(() => {
    return GUIDE_CONTENT.flatMap(section => section.chapters);
  }, []);

  const [view, setView] = useState<'landing' | 'guide'>('landing');
  const [activeChapterId, setActiveChapterId] = useState<string>(allChapters[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const currentChapterIndex = allChapters.findIndex(c => c.id === activeChapterId);
  const currentChapter = allChapters[currentChapterIndex];

  const handleStartGuide = () => {
    setView('guide');
    setActiveChapterId(allChapters[0].id);
    window.scrollTo(0, 0);
  };

  const handleGoHome = () => {
    setView('landing');
    window.scrollTo(0, 0);
  };

  const handleNext = () => {
    if (currentChapterIndex < allChapters.length - 1) {
      setActiveChapterId(allChapters[currentChapterIndex + 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (currentChapterIndex > 0) {
      setActiveChapterId(allChapters[currentChapterIndex - 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (view === 'landing') {
    return <Landing onStart={handleStartGuide} />;
  }

  return (
    <div className="min-h-screen bg-black text-zinc-200 font-sans selection:bg-zinc-800 selection:text-white">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-14 bg-black/90 backdrop-blur border-b border-zinc-800 z-30 flex items-center px-4 justify-between">
        <div className="font-bold tracking-tight text-white">CryptoGuide</div>
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="p-2 hover:bg-zinc-800 rounded-md text-zinc-400 hover:text-white"
        >
          <Menu size={20} />
        </button>
      </div>

      <Sidebar 
        sections={GUIDE_CONTENT} 
        activeChapterId={activeChapterId}
        onSelectChapter={(id) => {
          setActiveChapterId(id);
          setView('guide');
        }}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        onGoHome={handleGoHome}
      />

      <main className="lg:pl-72 min-h-screen transition-all duration-300 pt-14 lg:pt-0 bg-black">
        {currentChapter && (
          <ContentRenderer 
            chapter={currentChapter} 
            onNext={handleNext}
            onPrev={handlePrev}
            hasNext={currentChapterIndex < allChapters.length - 1}
            hasPrev={currentChapterIndex > 0}
          />
        )}
      </main>

      <AiAssistant />
    </div>
  );
};

export default App;