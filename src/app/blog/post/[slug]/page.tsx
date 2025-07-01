import CardPost from "@/components/post/cardPost";
import { DUMMY_POSTS } from "@/utils/data";
import { notFound } from "next/navigation";

type PostProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Post({ params }: PostProps) {
  const { slug } = await params;

  const cardInfoPost = DUMMY_POSTS.find((post) => {
    return post.slug === slug;
  });

  if (!cardInfoPost) {
    notFound();
  }

  return <CardPost {...cardInfoPost} />;
}
