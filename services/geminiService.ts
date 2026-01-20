
import { GoogleGenAI, Type } from "@google/genai";

// Initialize GoogleGenAI using the exact signature required by guidelines.
// process.env.API_KEY is assumed to be valid and provided by the environment.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getLearningPath = async (problemDescription: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `User wants to solve this problem: "${problemDescription}". 
      Based on the SILVER curriculum (Python, JS, HTML/CSS, AI APIs, AI Tools), suggest a concise learning path. 
      Format the response as JSON with properties: 'pathTitle', 'recommendedSkills' (array of strings), and 'shortStrategy' (2 sentences).`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            pathTitle: { type: Type.STRING },
            recommendedSkills: { 
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            shortStrategy: { type: Type.STRING }
          },
          required: ["pathTitle", "recommendedSkills", "shortStrategy"]
        }
      }
    });

    // Access the .text property directly and trim whitespace before parsing.
    const text = response.text;
    if (!text) {
      throw new Error("No text content returned from the model.");
    }
    
    return JSON.parse(text.trim());
  } catch (error) {
    console.error("Error fetching learning path:", error);
    return null;
  }
};