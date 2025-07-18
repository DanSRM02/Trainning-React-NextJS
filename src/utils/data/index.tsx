import airobotImage from "@/assets/images/posts/ai-robot.jpg";
import beaverImage from "@/assets/images/posts/beaver.jpg";
import coupleCookingImage from "@/assets/images/posts/couple-cooking.jpg";
import hikingImage from "@/assets/images/posts/hiking.jpg";
import landscapeImage from "@/assets/images/posts/landscape.jpg";
import { postTypes } from "../types/postType";
import { dataResponse } from "../types/reponseType";

export const DUMMY_POSTS: postTypes[] = [
  {
    id: 1,
    slug: "will-ai-replace-humans",
    title: "Will AI Replace Humans?",
    image: airobotImage,
    date: "2021-07-01",
    content:
      "Since late 2022 AI is on the rise and therefore many people worry whether AI will replace humans. The answer is not that simple. AI is a tool that can be used to automate tasks, but it can also be used to augment human capabilities. The future is not set in stone, but it is clear that AI will play a big role in the future. The question is how we will use it.",
  },
  {
    id: 2,
    slug: "beaver-plague",
    title: "A Plague of Beavers",
    image: beaverImage,
    date: "2022-05-01",
    content:
      "Beavers are taking over the world. They are building dams everywhere and flooding entire cities. What can we do to stop them?",
  },
  {
    id: 3,
    slug: "couple-cooking",
    title: "Spend more time together!",
    image: coupleCookingImage,
    date: "2024-03-01",
    content:
      "Cooking together is a great way to spend more time with your partner. It is fun and you get to eat something delicious afterwards. What are you waiting for? Get cooking!",
  },
  {
    id: 4,
    slug: "hiking",
    title: "Hiking is the best!",
    image: hikingImage,
    date: "2024-01-01",
    content:
      "Hiking is a great way to get some exercise and enjoy the great outdoors. It is also a great way to clear your mind and reduce stress. So what are you waiting for? Get out there and start hiking!",
  },
  {
    id: 5,
    slug: "landscape",
    title: "The beauty of landscape",
    image: landscapeImage,
    date: "2022-07-01",
    content:
      "Landscape photography is a great way to capture the beauty of nature. It is also a great way to get outside and enjoy the great outdoors. So what are you waiting for? Get out there and start taking some pictures!",
  },
];

export async function getData() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json as dataResponse[];
  } catch (error) {
    throw error;
  }
}

export async function getPostById(id: string) {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json as dataResponse;
  } catch (error) {
    throw error;
  }
}
