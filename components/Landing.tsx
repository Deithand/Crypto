import React, { useRef, useState } from 'react';
import { ArrowRight, Bot, TrendingUp, Shield, Brain, Zap, BarChart3, Lock, PlayCircle, ChevronRight, X, FileText, ShieldCheck } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

interface LandingProps {
  onStart: () => void;
}

type ModalType = 'none' | 'disclaimer' | 'privacy';

const Landing: React.FC<LandingProps> = ({ onStart }) => {
  const containerRef = useRef(null);
  const [activeModal, setActiveModal] = useState<ModalType>('none');

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Apple-style parallax for hero text
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="relative w-full bg-[#000000] text-[#f5f5f7] font-sans selection:bg-blue-500/30">
      
      {/* NAV BAR (Sticky Apple Style) */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 h-12 bg-black/70 backdrop-blur-xl border-b border-white/5 flex items-center justify-center lg:justify-between px-6 lg:px-12 max-w-[1400px] mx-auto left-0 right-0"
      >
         <div className="text-xs font-medium tracking-wide text-gray-300 cursor-pointer hover:text-white transition-colors">CryptoPro Guide</div>
         <div className="hidden lg:flex items-center gap-6 text-[11px] font-medium text-gray-400">
            <span className="hover:text-white transition-colors cursor-pointer">Обзор</span>
            <span className="hover:text-white transition-colors cursor-pointer">Возможности</span>
            <span className="hover:text-white transition-colors cursor-pointer">Детали</span>
            <button onClick={onStart} className="bg-white text-black px-3 py-1 rounded-full hover:bg-gray-200 transition-colors font-semibold">
               Начать обучение
            </button>
         </div>
      </motion.nav>

      {/* HERO SECTION */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden pt-12">
        <motion.div style={{ scale: heroScale, opacity: heroOpacity }} className="text-center max-w-4xl mx-auto z-10">
           <motion.h2 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
             className="text-[#2997ff] font-semibold text-lg md:text-xl mb-4 tracking-wide"
           >
             Фьючерсы. Переосмысление.
           </motion.h2>
           
           <motion.h1 
             initial={{ opacity: 0, y: 40 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
             className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[1.05] mb-6"
           >
             Покори рынок. <br/>
             <span className="text-gray-500">Без хаоса.</span>
           </motion.h1>

           <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
             className="text-xl text-gray-400 font-medium max-w-xl mx-auto mb-10 leading-relaxed"
           >
             Профессиональные знания. Доступно для каждого.
           </motion.p>

           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
             className="flex flex-col sm:flex-row items-center justify-center gap-4"
           >
              <button 
                onClick={onStart}
                className="bg-[#2997ff] hover:bg-[#147ce5] text-white px-8 py-3 rounded-full text-base font-medium transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(41,151,255,0.3)] hover:shadow-[0_0_30px_rgba(41,151,255,0.5)]"
              >
                Читать Гайд <ArrowRight size={16} />
              </button>
              <button 
                onClick={onStart} 
                className="text-[#2997ff] hover:text-white transition-colors flex items-center gap-1 text-base px-4 py-2"
              >
                Содержание курса <ChevronRight size={14} />
              </button>
           </motion.div>
        </motion.div>
      </section>

      {/* BENTO GRID SECTION */}
      <section className="bg-[#000] py-32 px-4 sm:px-6">
         <div className="max-w-[1200px] mx-auto">
            <div className="mb-20">
               <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-4">Мощная база знаний.</h2>
               <p className="text-2xl text-gray-500 font-medium">Всё, что нужно для старта с нуля до профи.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               
               {/* Large Card 1 */}
               <BentoCard 
                  className="md:col-span-2 bg-[#161617] min-h-[400px] flex flex-col justify-between overflow-hidden group"
               >
                  <div className="p-10 z-10 relative">
                     <h3 className="text-gray-400 font-semibold text-xs uppercase tracking-widest mb-2">Технический Анализ</h3>
                     <h4 className="text-3xl font-semibold text-white mb-4">Видеть невидимое.</h4>
                     <p className="text-gray-400 max-w-md text-lg leading-relaxed">Учись читать структуру рынка, ликвидность и price action без мусора на графике.</p>
                  </div>
                  <div className="absolute right-[-20%] bottom-[-20%] w-[70%] h-[70%] bg-gradient-to-tl from-[#2997ff]/20 to-transparent rounded-full blur-[80px] group-hover:opacity-80 transition-opacity duration-700"></div>
                  <div className="h-64 w-full mt-auto relative">
                      {/* Abstract Chart UI Mockup */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-[90%] bg-[#1d1d1f] rounded-t-2xl border border-white/10 shadow-2xl overflow-hidden flex items-center justify-center">
                         <TrendingUp size={64} className="text-[#2997ff] opacity-50" />
                      </div>
                  </div>
               </BentoCard>

               {/* Tall Card */}
               <BentoCard className="bg-[#161617] min-h-[400px] md:row-span-2 flex flex-col overflow-hidden group">
                  <div className="p-10 flex-1 z-10">
                     <Bot size={48} className="text-[#2997ff] mb-6" />
                     <h3 className="text-3xl font-semibold text-white mb-4">AI Ментор. <br/> Всегда рядом.</h3>
                     <p className="text-gray-400 text-lg leading-relaxed">Твой личный аналитик. Спрашивай про стратегии, риски или термины в любое время.</p>
                  </div>
                  <div className="h-[300px] w-full bg-gradient-to-b from-transparent to-black/50 relative flex flex-col gap-3 p-6 opacity-50 group-hover:opacity-80 transition-opacity duration-500">
                      <div className="w-full bg-[#2c2c2e] rounded-xl p-3 ml-4 border border-white/5 self-end text-xs text-gray-300">Как посчитать RR?</div>
                      <div className="w-[90%] bg-[#0071e3] rounded-xl p-3 border border-white/5 self-start text-xs text-white">Формула: (Цель - Вход) / (Вход - Стоп). Целься в &gt; 2.0</div>
                  </div>
               </BentoCard>

               {/* Small Card 1 */}
               <BentoCard className="bg-[#161617] min-h-[350px] flex flex-col p-10 justify-center group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <Lock size={40} className="text-purple-400 mb-4 relative z-10" />
                  <h4 className="text-2xl font-semibold text-white mb-2 relative z-10">Риск — Главное.</h4>
                  <p className="text-gray-400 relative z-10 leading-relaxed">Математические модели для защиты капитала от ликвидации.</p>
               </BentoCard>

               {/* Small Card 2 */}
               <BentoCard className="bg-[#161617] min-h-[350px] flex flex-col p-10 justify-center group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <Brain size={40} className="text-emerald-400 mb-4 relative z-10" />
                  <h4 className="text-2xl font-semibold text-white mb-2 relative z-10">Психология.</h4>
                  <p className="text-gray-400 relative z-10 leading-relaxed">Управляй разумом. Победи FOMO и тильт, пока они не победили тебя.</p>
               </BentoCard>

            </div>
         </div>
      </section>

      {/* LARGE TEXT SECTION */}
      <section className="bg-[#161617] py-40 px-6">
         <div className="max-w-4xl mx-auto text-center">
            <ScrollRevealText text="Трейдинг — это не удача. Это точность, дисциплина и правильная информация в правильное время." />
         </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#000] py-20 px-6 border-t border-white/10">
         <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
            <div>
               <div className="text-sm font-semibold text-white mb-1">CryptoPro Guide</div>
               <div className="text-xs text-gray-500">Сделано в России.</div>
            </div>
            
            <div className="flex gap-8 flex-wrap">
               <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Создатели</span>
                  <span className="text-sm text-white hover:text-[#2997ff] cursor-pointer transition-colors">Deithand</span>
                  <span className="text-sm text-white hover:text-[#2997ff] cursor-pointer transition-colors">Backer</span>
               </div>
               <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Информация</span>
                  <button 
                    onClick={() => setActiveModal('disclaimer')}
                    className="text-sm text-gray-500 hover:text-white text-left transition-colors"
                  >
                    Отказ от ответственности
                  </button>
                  <button 
                    onClick={() => setActiveModal('privacy')}
                    className="text-sm text-gray-500 hover:text-white text-left transition-colors"
                  >
                    Конфиденциальность
                  </button>
               </div>
            </div>
         </div>
         <div className="max-w-[1000px] mx-auto mt-12 text-[10px] text-gray-600">
            © 2024. Все права защищены. Этот гайд не является финансовой рекомендацией.
         </div>
      </footer>

      {/* LEGAL MODAL */}
      <LegalModal 
        isOpen={activeModal !== 'none'} 
        type={activeModal} 
        onClose={() => setActiveModal('none')} 
      />

    </div>
  );
};

// --- SUBCOMPONENTS ---

const LegalModal = ({ isOpen, type, onClose }: { isOpen: boolean, type: ModalType, onClose: () => void }) => {
  const content = {
    disclaimer: {
      title: 'Отказ от ответственности',
      icon: Shield,
      text: (
        <div className="space-y-4">
          <p>Торговля криптовалютными фьючерсами сопряжена с <strong>экстремально высоким уровнем риска</strong>. Вы можете потерять весь свой инвестиционный капитал.</p>
          <p>Информация, представленная в данном руководстве и предоставляемая AI-ассистентом, носит исключительно <strong>образовательный и информационный характер</strong>. Она не является индивидуальной инвестиционной рекомендацией, финансовым советом, торговым сигналом или призывом к действию.</p>
          <p>Авторы (Deithand, Backer) и администрация сайта не несут ответственности за любые прямые или косвенные убытки, возникшие в результате использования данной информации. Все торговые решения вы принимаете самостоятельно на свой страх и риск.</p>
          <p className="text-orange-400">Никогда не торгуйте на заемные средства или деньги, потеря которых критична для вашего благосостояния.</p>
        </div>
      )
    },
    privacy: {
      title: 'Конфиденциальность',
      icon: FileText,
      text: (
        <div className="space-y-4">
          <p>Мы уважаем вашу приватность. Этот веб-сайт работает преимущественно на стороне клиента (в вашем браузере).</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Сбор данных:</strong> Мы не собираем, не храним и не продаем ваши личные данные (имя, email, телефон).</li>
            <li><strong>AI Ассистент:</strong> Диалоги с AI-помощником обрабатываются через Google Gemini API. Мы не сохраняем историю ваших чатов на наших серверах.</li>
            <li><strong>Local Storage:</strong> Мы можем использовать локальное хранилище вашего браузера для сохранения вашего прогресса или настроек темы. Эти данные не покидают ваше устройство.</li>
            <li><strong>Аналитика:</strong> Сайт может использовать анонимную статистику посещений для улучшения качества контента.</li>
          </ul>
        </div>
      )
    },
    none: { title: '', icon: Shield, text: null }
  };

  const current = content[type] || content.none;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 flex items-center justify-center z-[70] p-4 pointer-events-none"
          >
            <div className="bg-[#1c1c1e] border border-white/10 w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden pointer-events-auto max-h-[80vh] flex flex-col">
              <div className="flex items-center justify-between p-6 border-b border-white/5 bg-[#2c2c2e]/50 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <current.icon size={20} className="text-[#2997ff]" />
                  <h3 className="text-lg font-semibold text-white">{current.title}</h3>
                </div>
                <button onClick={onClose} className="text-gray-400 hover:text-white bg-white/5 p-2 rounded-full transition-colors">
                  <X size={18} />
                </button>
              </div>
              <div className="p-8 overflow-y-auto text-gray-300 text-[15px] leading-relaxed">
                {current.text}
              </div>
              <div className="p-6 border-t border-white/5 bg-[#161617] flex justify-end">
                <button 
                  onClick={onClose}
                  className="bg-[#2997ff] hover:bg-[#147ce5] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors"
                >
                  Понятно
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const BentoCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
   return (
      <motion.div 
         initial={{ opacity: 0, scale: 0.95 }}
         whileInView={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
         viewport={{ once: true, margin: "-50px" }}
         className={`rounded-[30px] relative ${className}`}
      >
         {children}
      </motion.div>
   )
}

const ScrollRevealText = ({ text }: { text: string }) => {
  const words = text.split(" ");
  return (
    <p className="flex flex-wrap justify-center gap-x-4 gap-y-2">
      {words.map((word, i) => (
        <Word key={i} i={i}>{word}</Word>
      ))}
    </p>
  );
};

const Word = ({ children, i }: { children: string, i: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.6"] 
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [0.1, 1]); 
  
  return (
    <motion.span 
      ref={ref}
      style={{ opacity }}
      className="text-3xl md:text-5xl font-semibold tracking-tight transition-colors duration-300"
    >
      {children}
    </motion.span>
  );
};

export default Landing;