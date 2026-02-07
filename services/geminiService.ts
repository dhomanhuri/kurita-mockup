
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const askWaterExpert = async (prompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: `You are the Kurita Water Wisdom AI. 
        Kurita Water Industries Ltd. is a global leader in water treatment.
        You are an expert in water chemistry, sustainability, and industrial water systems.
        Answer questions about water conservation, ultrapure water, cooling systems, and wastewater reclamation.
        Maintain a professional, informative, and environmentally conscious tone.
        Keep answers concise and technical where appropriate.`,
        temperature: 0.7,
      },
    });
    return response.text || "I'm sorry, I couldn't process that request at the moment.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The Water Wisdom AI is currently recalibrating its filters. Please try again later.";
  }
};
