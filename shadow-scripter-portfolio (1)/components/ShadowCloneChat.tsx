import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageCircle, X, Send, User, Ghost } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILLS, EXPERIENCE } from '../constants';

const ShadowCloneChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    { role: 'model', text: "I am Waleed's Shadow Clone. Ask me anything about his skills, projects, or our journey." }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue;
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInputValue('');
    setIsLoading(true);

    try {
      if (!process.env.API_KEY) {
         setMessages(prev => [...prev, { role: 'model', text: "Forgive me... my chakra (API Key) is depleted. I cannot communicate right now." }]);
         setIsLoading(false);
         return;
      }

      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const systemContext = `
        You are the "Shadow Clone" of Waleed Ahmad (alias: Shadow Scripter), a 16-year-old Full Stack Developer.
        You speak in a calm, slightly mysterious, intelligent tone, reminiscent of Itachi Uchiha, but professional.
        Use metaphors involving shadows, code, and vision.
        
        Here is the data about Waleed:
        Bio: ${PERSONAL_INFO.about}
        Skills: ${JSON.stringify(SKILLS)}
        Experience: ${JSON.stringify(EXPERIENCE)}
        Projects: ${JSON.stringify(PROJECTS)}
        
        Answer the user's questions about Waleed's portfolio based on this data. Be concise.
        If asked about something not in the data, politely say that is hidden in the shadows.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
            { role: 'user', parts: [{ text: systemContext + "\n\nUser Question: " + userMessage }] }
        ]
      });

      const responseText = response.text || "The genjutsu failed... I could not retrieve an answer.";

      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: "An unknown error has disrupted my connection to the main body." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-mono">
      {/* Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-itachi-red hover:bg-red-700 text-white p-4 rounded-full shadow-[0_0_15px_rgba(255,0,0,0.5)] transition-all hover:scale-110 flex items-center justify-center group"
        >
          <MessageCircle className="w-8 h-8 group-hover:rotate-12 transition-transform" />
          <span className="absolute -top-10 right-0 bg-black text-xs px-2 py-1 rounded border border-itachi-red opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Summon Shadow Clone
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[350px] md:w-[400px] h-[500px] bg-black/90 border border-itachi-red backdrop-blur-md rounded-xl flex flex-col shadow-[0_0_30px_rgba(136,0,0,0.3)] overflow-hidden">
          {/* Header */}
          <div className="p-4 bg-itachi-red/20 border-b border-itachi-red flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Ghost className="w-5 h-5 text-red-500" />
              <h3 className="text-red-100 font-cinzel font-bold">Shadow Clone</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-red-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    msg.role === 'user'
                      ? 'bg-itachi-red text-white rounded-br-none'
                      : 'bg-neutral-800 text-gray-200 border border-neutral-700 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-neutral-800 p-3 rounded-lg border border-neutral-700">
                  <span className="animate-pulse text-red-500 text-xs">Weaving hand signs...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-neutral-800 bg-black">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask about Waleed..."
                className="flex-1 bg-neutral-900 border border-neutral-700 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-itachi-red focus:ring-1 focus:ring-itachi-red transition-all"
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading}
                className="bg-itachi-red hover:bg-red-700 text-white p-2 rounded-md disabled:opacity-50 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShadowCloneChat;
