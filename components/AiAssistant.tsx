import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 'intro', role: 'model', text: 'Привет! Я твой AI-наставник по фьючерсам. Задавай любые вопросы по гайду или рынку.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    // Prepare history for API
    const history = messages.map(m => ({ role: m.role, text: m.text }));
    
    const responseText = await sendMessageToGemini(userMsg.text, history);

    const aiMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText || "Извини, возникла ошибка подключения. Попробуй еще раз."
    };

    setMessages(prev => [...prev, aiMsg]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center rounded-full bg-white text-black shadow-lg hover:scale-105 transition-all duration-300
          ${isOpen ? 'rotate-90 scale-0 opacity-0' : 'scale-100 opacity-100'}
        `}
      >
        <Bot size={24} />
      </button>

      {/* Chat Window */}
      <div className={`
        fixed bottom-6 right-6 w-[calc(100vw-48px)] md:w-[400px] bg-[#09090b] border border-white/10 rounded-2xl z-50 flex flex-col transition-all duration-300 origin-bottom-right shadow-2xl
        ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-10 pointer-events-none'}
      `}
      style={{ maxHeight: '600px', height: '80vh' }}
      >
        {/* Header */}
        <div className="h-14 border-b border-white/10 flex items-center justify-between px-4 bg-white/5 rounded-t-2xl backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="font-medium text-sm">AI Ассистент</span>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-zinc-400 hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#09090b]">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`
                  max-w-[85%] px-4 py-3 text-sm rounded-2xl leading-relaxed
                  ${msg.role === 'user' 
                    ? 'bg-white text-black rounded-br-none' 
                    : 'bg-zinc-800 text-zinc-200 rounded-bl-none'}
                `}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-zinc-800 rounded-2xl rounded-bl-none px-4 py-3 flex items-center gap-2">
                <Sparkles size={14} className="text-zinc-400 animate-spin" />
                <span className="text-xs text-zinc-400">Печатает...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-3 border-t border-white/10 bg-black rounded-b-2xl">
          <div className="relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Спроси что-нибудь..."
              className="w-full bg-zinc-900 text-white placeholder-zinc-600 rounded-xl py-3 pl-4 pr-12 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all text-sm"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="absolute right-2 p-2 text-zinc-400 hover:text-white transition-colors disabled:opacity-50"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiAssistant;