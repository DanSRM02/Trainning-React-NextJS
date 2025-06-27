import { StaticImageData } from "next/image";

export type postTypes = {
  id: string;
  title: string;
  slug: string;
  image: StaticImageData;
  date: string;
  content: string;
}
