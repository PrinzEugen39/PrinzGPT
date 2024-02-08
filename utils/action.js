"use server";
import OpenAI from "openai";
import tourQuery from "./tourQuery";

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

export const getExistingTours = async ({ provinsi, kota }) => {
  return "awesome";
};
export const generateTourResponse = async ({ provinsi, kota }) => {
  const query = tourQuery(kota, provinsi);

  console.log("QUERY", query)

  try {
    const response = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are an experienced guide for indonesian tours",
        },
        {
          role: "user",
          content: query,
        },
      ],
      model: "gpt-3.5-turbo",
      temperature: 0.1,
    });

    console.log(response.choices[0].message);
    const tourData = JSON.parse(response.choices[0].message.content);

    if (!tourData.tour) {
      return null;
    }

    return tourData.tour;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const createNewTours = async ({ provinsi, kota }) => {
  return "awesome";
};
