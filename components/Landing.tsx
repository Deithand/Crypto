import React, { useRef } from 'react';
import { ArrowRight, Bot, TrendingUp, Shield, Brain } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface LandingProps {
  onStart: () => void;
}

const Landing: React.FC<LandingProps> = ({ onStart }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);

  return (
    <div ref={containerRef} className="relative w-full bg-[#050505] text-white selection:bg-white selection:text-black overflow-hidden">
      
      {/* Noise Overlay */}
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none z-50"></div>

      {/* HERO SECTION */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6 border-b border-white/5">
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="text-center max-w-5xl mx-auto z-10"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-medium tracking-widest uppercase text-zinc-400">Guide v2.0 Online</span>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.9] mb-8"
          >
            <span className="block text-zinc-600">DIGITAL</span>
            <span className="block text-white">TRADING</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl text-zinc-500 max-w-xl mx-auto leading-relaxed mb-12 font-light"
          >
            Интерактивное руководство по фьючерсам. 
            <br />
            Без инфоцыганства. Только математика и психология.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            onClick={onStart}
            className="group relative inline-flex items-center gap-4 px-10 py-5 bg-white text-black rounded-full font-bold text-lg tracking-tight overflow-hidden"
          >
             <span className="relative z-10">Начать Обучение</span>
             <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
             <div className="absolute inset-0 bg-zinc-200 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
          </motion.button>
        </motion.div>

        {/* Ambient Background Gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-zinc-800/20 to-transparent rounded-full blur-[120px] pointer-events-none"></div>
      </section>

      {/* SCROLL REVEAL TEXT SECTION */}
      <section className="min-h-screen flex items-center justify-center px-6 py-32 bg-[#050505] border-b border-white/5">
        <div className="max-w-4xl mx-auto text-4xl md:text-6xl font-bold leading-tight tracking-tight text-center">
          <ScrollRevealText text="Большинство теряет деньги в первую неделю. Почему? Потому что они играют в казино, а не работают с вероятностями. Мы научим тебя быть казино." />
        </div>
      </section>

      {/* FEATURE CARDS (STICKY SCROLL) */}
      <section className="py-32 px-6 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">01 / Foundation</h2>
            <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tight">Система Знаний</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <FeatureCard 
                icon={TrendingUp}
                title="Технический Анализ" 
                desc="Понимание структуры рынка. Уровни, тренды и ликвидность. Без гадания на кофейной гуще."
                delay={0}
             />
             <FeatureCard 
                icon={Shield}
                title="Риск-менеджмент" 
                desc="Математика выживания. Как сделать так, чтобы одна ошибка не обнулила твой депозит."
                delay={0.2}
             />
             <FeatureCard 
                icon={Brain}
                title="Психология Толпы" 
                desc="Контроль эмоций. Почему страх (FOMO) и жадность заставляют тебя покупать на хаях."
                delay={0.4}
             />
          </div>
        </div>
      </section>

      {/* AI SHOWCASE PARALLAX */}
      <section className="relative py-40 px-6 overflow-hidden border-y border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-8">
              <Bot size={32} className="text-white" />
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
              AI Наставник
            </h2>
            <p className="text-xl text-zinc-400 leading-relaxed mb-12 font-light">
              Не просто текст. Встроенный искусственный интеллект, обученный на базе данных опытных трейдеров.
              Задавай вопросы, проверяй гипотезы, считай риски в реальном времени.
            </p>
            
            <div className="space-y-6">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-[1px] bg-white/20"></div>
                  <span className="text-zinc-300 font-mono text-sm">24/7 ДОСТУПНОСТЬ</span>
               </div>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-[1px] bg-white/20"></div>
                  <span className="text-zinc-300 font-mono text-sm">АНАЛИЗ КОНТЕКСТА</span>
               </div>
            </div>
          </motion.div>

          <div className="relative perspective-1000">
             <motion.div 
               initial={{ opacity: 0, rotateX: 20, y: 100 }}
               whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
               transition={{ duration: 1, type: "spring" }}
               viewport={{ once: true }}
               className="relative z-10 bg-gradient-to-b from-zinc-900 to-black border border-white/10 rounded-3xl p-8 shadow-2xl"
             >
                {/* Mock Chat UI */}
                <div className="flex items-center justify-between border-b border-white/5 pb-6 mb-6">
                   <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                      <span className="text-sm font-medium text-zinc-300">Assistant Online</span>
                   </div>
                </div>
                <div className="space-y-6 font-mono text-sm">
                   <div className="flex gap-4">
                      <div className="flex-1 text-right">
                         <span className="inline-block bg-white text-black px-4 py-3 rounded-2xl rounded-tr-sm">
                            Что такое Isolated Margin?
                         </span>
                      </div>
                   </div>
                   <div className="flex gap-4">
                      <div className="flex-1">
                         <span className="inline-block bg-zinc-800 text-zinc-300 px-4 py-3 rounded-2xl rounded-tl-sm leading-relaxed">
                            Изолированная маржа ограничивает твой риск только суммой, выделенной на конкретную сделку. Если цена пойдет против тебя, ты потеряешь только эту сумму, а не весь депозит.
                         </span>
                      </div>
                   </div>
                </div>
             </motion.div>
             
             {/* Glow Effect behind chat */}
             <div className="absolute inset-0 bg-emerald-500/20 blur-[100px] -z-10 transform translate-y-10"></div>
          </div>
        </div>
      </section>

      {/* CREATORS & FOOTER */}
      <footer className="py-24 px-6 text-center bg-[#030303]">
         <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
         >
            <h3 className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-12">Команда</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-16 mb-24">
               <div className="text-center group cursor-default">
                  <div className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-500 transition-colors">Deithand</div>
                  <div className="text-sm text-zinc-500">Strategy & Content</div>
               </div>
               <div className="text-center group cursor-default">
                  <div className="text-2xl font-bold text-white mb-2 group-hover:text-purple-500 transition-colors">Backer</div>
                  <div className="text-sm text-zinc-500">Design & Engineering</div>
               </div>
            </div>

            <div className="border-t border-white/5 pt-12">
               <button 
                  onClick={onStart}
                  className="text-zinc-400 hover:text-white transition-colors text-sm mb-8"
               >
                  cloyu.buzz/crypto
               </button>
               <p className="text-[10px] text-zinc-700 uppercase tracking-widest">
                  © 2024 All Rights Reserved
               </p>
            </div>
         </motion.div>
      </footer>
    </div>
  );
};

// COMPONENT: SCROLL REVEAL TEXT
const ScrollRevealText = ({ text }: { text: string }) => {
  const words = text.split(" ");
  return (
    <p className="flex flex-wrap justify-center gap-x-3 gap-y-2">
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
    offset: ["start 0.9", "start 0.6"] // Starts animating when word enters bottom of screen
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [0.1, 1]);
  
  return (
    <motion.span 
      ref={ref}
      style={{ opacity }}
      className="transition-colors duration-300"
    >
      {children}
    </motion.span>
  );
};

// COMPONENT: FEATURE CARD
const FeatureCard = ({ icon: Icon, title, desc, delay }: any) => {
   return (
      <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5, delay }}
         viewport={{ once: true }}
         className="group p-8 rounded-3xl bg-zinc-900/30 border border-white/5 hover:bg-zinc-900/50 hover:border-white/10 transition-all duration-500 cursor-default"
      >
         <div className="mb-6">
            <Icon size={32} className="text-zinc-500 group-hover:text-white transition-colors duration-300" />
         </div>
         <h4 className="text-xl font-bold text-white mb-4">{title}</h4>
         <p className="text-zinc-400 leading-relaxed text-sm">
            {desc}
         </p>
      </motion.div>
   )
}

export default Landing;