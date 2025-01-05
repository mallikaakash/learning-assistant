import { GoogleGenerativeAI } from '@google/generative-ai';

const api_key = "AIzaSyDuH3OtqRGRT0Un3AxFfj66IC-x7Ta2KTA";

async function testGeminiModel(prompt = "Explain how AI works") {
    try {
        const genAI = new GoogleGenerativeAI(api_key);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        
        const result = await model.generateContent(prompt);
        return result.response.text();
    } catch (error) {
        console.error("Error testing Gemini model:", error);
        throw error;
    }
}

// Example usage:
// await testGeminiModel("What is JavaScript?");

export default testGeminiModel;