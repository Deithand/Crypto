import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION, GUIDE_CONTENT } from "../constants";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

// Flatten content for context
const flatContent = GUIDE_CONTENT.map(section => 
  section.chapters.map(chap => 
    `Chapter: ${chap.title}\n${chap.content.map(b => Array.isArray(b.content) ? b.content.join('\n') : b.content).join('\n')}`
  ).join('\n\n')
).join('\n\n---\n\n');

export const sendMessageToGemini = async (message: string, history: {role: 'user' | 'model', text: string}[]) => {
  try {
    const model = "gemini-2.5-flash";
    
    const response = await ai.models.generateContent({
      model: model,
      contents: [
        ...history.map(h => ({ role: h.role, parts: [{ text: h.text }] })),
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: `${SYSTEM_INSTRUCTION}\n\nКонтекст гайда:\n${flatContent}`,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Брат, что-то связь барахлит. Попробуй позже или проверь API ключ.";
  }
};