"use server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_API,
});

export const generateChatResponse = async (chatMessages) => {
  try {
    const response = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are an experienced guide for indonesian tours",
        },
        ...chatMessages,
      ],
      model: "gpt-3.5-turbo",
      temperature: 0.7,
      
    });
    return response.choices[0].message;
  } catch (error) {
    console.log(error);
    return null;
  }
};
