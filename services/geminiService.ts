import { GoogleGenAI } from "@google/genai";

// Initialize Gemini with direct process.env.API_KEY as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAIAssistantResponse = async (userPrompt: string, systemContext: string) => {
  try {
    // Using gemini-3-pro-preview for complex architectural reasoning tasks
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `You are the OmniCommerce Architect AI Assistant. Your goal is to help users build ecommerce websites and manage dropshipping operations. 
        Context: ${systemContext}. 
        Keep answers professional, actionable, and safety-focused. Explain features in plain language.`,
        temperature: 0.7,
      },
    });
    // response.text is a property access, not a method call
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered an error connecting to my core brain. Please try again or check your configuration.";
  }
};