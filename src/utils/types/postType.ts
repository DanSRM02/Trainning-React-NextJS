import { StaticImageData } from "next/image";

export type postTypes = {
  id: number;
  title: string;
  slug?: string;
  image?: StaticImageData;
  date?: string;
  content?: string;
  body?: string;
  userId?: number;
};
