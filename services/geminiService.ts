
import { GoogleGenAI, Type } from "@google/genai";
import { JobSpec, GeneratedJobContent } from '../types';

export const generateJobDescription = async (spec: JobSpec): Promise<GeneratedJobContent> => {

  // Initialize client here to ensure environment variables are available
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

  const prompt = `
    Create a professional job description for a ${spec.title} role.
    Key skills required: ${spec.skills}.
    Experience level: ${spec.experience}.
    
    Format the output as a structured JSON object with a professional summary, a list of responsibilities, and a list of qualifications.
    Keep it concise, modern, and engaging.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: { type: Type.STRING },
            responsibilities: { 
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            qualifications: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          }
        }
      }
    });

    const text = response.text;
    if (!text) {
        throw new Error("No response generated");
    }
    return JSON.parse(text) as GeneratedJobContent;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
