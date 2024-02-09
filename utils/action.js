"use server";
import OpenAI from "openai";
import tourQuery from "./tourQuery";
import prisma from "./db";

import { revalidatePath } from "next/cache";

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
      max_tokens: 150,
    });
    return {
      message: response.choices[0].message,
      tokens: response.usage.total_tokens,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const generateTourResponse = async ({ provinsi, kota }) => {
  const query = tourQuery(kota, provinsi);

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
      temperature: 0,
    });

    // console.log(response.choices[0].message);
    const tourData = JSON.parse(response.choices[0].message.content);

    if (!tourData.tour) {
      return null;
    }

    return { tour: tourData.tour, tokens: response.usage.total_tokens };
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const createNewTours = async (tour) => {
  return prisma.tour.create({
    data: tour,
  });
};

export const getExistingTours = async ({ provinsi, kota }) => {
  return prisma.tour.findUnique({
    where: {
      city_province: {
        city: kota,
        province: provinsi,
      },
    },
  });
};

export const getAllTours = async (searchTerm) => {
  if (!searchTerm) {
    const tours = await prisma.tour.findMany({
      orderBy: {
        city: "asc",
      },
    });

    return tours;
  }

  const tours = await prisma.tour.findMany({
    orderBy: {
      city: "asc",
    },
    where: {
      OR: [
        {
          city: {
            contains: searchTerm,
            mode: "insensitive",
          },
        },
        {
          province: {
            contains: searchTerm,
            mode: "insensitive",
          },
        },
      ],
    },
  });

  return tours;
};

export const getToursById = async (id) => {
  return prisma.tour.findUnique({
    where: {
      id,
    },
  });
};

export const generateTourImage = async ({ city, province }) => {
  try {
    const tourImage = await openai.images.generate({
      prompt: `A panoramic view of ${city} in ${province} province`,
      n: 1,
      size: "512x512",
    });

    console.log(tourImage);

    return tourImage?.data[0]?.url;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const fetchUserTokenById = async (clerkId) => {
  const result = await prisma.token.findUnique({
    where: {
      clerkId,
    },
  });

  console.log(result);

  return result.tokens;
};

export const createUserToken = async (clerkId, tokens) => {
  const result = await prisma.token.create({
    data: {
      clerkId,
      tokens,
    },
  });

  return result?.tokens;
};

export const fetchOrGenerateTokens = async (clerkId) => {
  const tokens = await fetchUserTokenById(clerkId);

  if (tokens) {
    return tokens.tokens;
  }

  return (await createUserToken(clerkId)).tokens;
};

export const updateTokens = async (clerkId, tokens) => {
  const result = await prisma.token.update({
    where: {
      clerkId,
    },
    data: {
      tokens: {
        decrement: tokens,
      },
    },
  });

  revalidatePath("/profile");

  return result.tokens;
};
